import firebase from 'firebase/app'
import 'firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyDLJBCwL-TKgATNGc6T2s2cveKqSJD9kAE",
    authDomain: "diegoberlingieri-77aa6.firebaseapp.com",
    projectId: "diegoberlingieri-77aa6",
    storageBucket: "diegoberlingieri-77aa6.appspot.com",
    messagingSenderId: "169923766283",
    appId: "1:169923766283:web:7377f17cf98b7fe298ff0e"
})


export function getFirestore(){
    return firebase.firestore(app)
}


export async function getItemList(category){
    let response = {status: "", items:[]};

    const db = firebase.firestore(app);
    let itemCollection = null;
    if (!category){
      itemCollection = db.collection('items');
    } else {
      itemCollection = db.collection('items').where('category', '==', category);
    }
    try {
        const querySnapshot = await itemCollection.get();
        response.items = (querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        }));
        response.status = "success";
    }
    catch(e){
        response.status = "fail";
    }
    return response;
}


export async function getItemById(id){
    let response = {status: "", item: null};

    const db = firebase.firestore(app);
    const item = db.collection('items').doc(id);
    try {
        const querySnapshot = await item.get();
        if (!querySnapshot.exists) {
            response.status = 'empty';
        } else {
            response.status = 'success';
            response.item = {id: querySnapshot.id, ...querySnapshot.data()};
        }
    }catch(e){
        response.status = "fail";
    }
    return response;
}


export async function saveOrder(order){
    let response = {status: "", orderId: "", removedItems: []};
    const db = firebase.firestore(app);

    let querySnapshot;
    let stock;
    let item;
    let newItems = [];
  
    for (let i = 0; i < order.items.length; i++) {
      item = db.collection('items').doc(order.items[i].id);
      querySnapshot = await item.get();
      stock = querySnapshot.data().stock;
  
      if (stock >= order.items[i].quantity){
        stock = stock - order.items[i].quantity;
        item.update({stock: stock});
        newItems.push(order.items[i]);
      } else {
        response.removedItems.push(order.items[i]);     // inform removed items to customer
      }
    }
    order.items = newItems;                             // leave only the items that have enough stock
    
    const orders = db.collection("orders");
    try {
        querySnapshot = await orders.add(order);
        if (!querySnapshot.id) {
            response.status = 'fail';
        } else {
            response.status = 'success';
            response.orderId = querySnapshot.id;
        }
    }catch(e){
        response.status = 'fail';
    }
    return response;
}
