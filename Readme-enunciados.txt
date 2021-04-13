Entregable 1 - Crear la app utilizando el CLI
25/Feb/2021
due: 03/Mar/2021
- Crea una aplicación utilizando el CLI con el nombre de tu tienda, 
  y ejecuta los comandos necesarios para instalar React, configurarlo y visualizarlo en tu navegador.

Estado: Entregado y aprobado.

------------------------------------------------------------------------------------------------------------------

Entregable 2 - Menu e-commerce
01/Mar/2021
due: 08/Mar/2021

Crea una carpeta dentro de src llamada “components”, que contenga a NavBar.js, para crear una barra de menú simple.
El Menu debe tener:
- Brand (título/nombre de la tienda)
- Un listado de categorías clickeables (p)
- Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).

Estado: Entregado y aprobado.

------------------------------------------------------------------------------------------------------------------

Entregable 3 - Crea tu landing
03/Mar/2021
due: 10/Mar/2021

- crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js 
  para que esté visible en todo momento. Agrega algunos estilos con bootstrap/materialize u otro.
- crea un componente ItemListContainer con una prop greeting, y muestra el mensaje dentro 
  del contenedor con el styling integrado. Impórtalo dentro de App.js, y abajo de NavBar.js.

Comentarios:
ItemListContainer tipo Class - styling css externo
CartWidget tipo funcion - styling dentro del js
NavBar tipo Class - bootstrap + styling en css externo

Estado: Entregado y aprobado.

------------------------------------------------------------------------------------------------------------------

Entregable 4 - Contador con boton
08/mar/2021
due:

- Crea un componente ItemCount.js que debe estar compuesto por un boton y controles para incrementar y decrementar
la cantidad requerida de items.
- El numero del contador nunca puede superar el stock disponible
- De no haber stock el clic no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el boton, se debe ejecutar onAdd con un numero que debe ser la cantidad 
seleccionada por el usuario

function ItemCount({stock, initial, onAdd}){
  desarrollar logica
}

Estado: Entregado y aprobado.

------------------------------------------------------------------------------------------------------------------

Entregable 5 - Catalogo con map y promises
11/mar/2021
due: 22/mar/2021

- Crea los siguientes componentes para mostrar algunos productos en tu ItemListContainer.js:

  - Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder 
    a los detalles (los desarrollaremos más adelante)
    Ejemplo:
    function Item({ item }) {
      // Desarrolla la vista de un ítem donde item es de tipo
      // { id, title, price, pictureUrl }
    }

  - ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer del 
    desafío 3).
    Ejemplo: 
    function ItemList({ items }) {
      // Desarrolla la vista utilizando un array de items y un map
    }

- Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock 
estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en tiempo diferido 
(setTimeout) de 2 segundos para emular retrasos de red.

Estado: Entregado y aprobado.

------------------------------------------------------------------------------------------------------------------

Entregable 6 - Detalle del producto A y B

- Crea tu componente ItemDetailContainer, con la misma premisa que ItemListContainer. Al iniciar utilizando un 
efecto de montaje, debe llamar a un async mock (promise) que en 2 segundos le devuelva un 1 ítem, y lo guarde 
en un estado propio.

Ejemplo:
const getItems = () => { /* Esta función debe retornar la promesa que resuelva con delay */ }
function ItemDetailContainer() {
// Implementar mock invocando a getItems() y utilizando el resolver then
 return /* JSX que devuelva un ItemDetail (desafío 6b) */
}

- Crea tu componente ItemDetail.js que debe mostrar la vista de detalle de un ítem incluyendo su descripción,
una foto y el precio.

Ejemplo:
function ItemDetail({ item }) {
  return <>
    ...
    // Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio
    ...
  </>;
}

Estado: Entregado y aprobado.

------------------------------------------------------------------------------------------------------------------

Primera entrega del proyecto final

Instalar el paquete de navegacion "npm install react-router-dom"

Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
Aspectos a incluir en el entregable:

Rutas a configurar
- ‘/’ navega a <ItemListContainer />
- ‘/category/:id’  <ItemListContainer />
- ‘/item/:id’ navega a <ItemDetailContainer />

Links a configurar
- Clickear en el brand debe navegar a ‘/’
- Clickear un Item.js debe navegar a /item/:id
- Clickear en una categoría del navbar debe navegar a /category/:categoryId 

Para finalizar integra los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId 
¡utilizando efectos y los hooks de parámetros que vimos en clase!
Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y 
volver a cargar los productos que correspondan a dicha categoría

>>Además:
Deberás corroborar que tu proyecto cuente con:
- Navbar con cart
- Catálogo
- Detalle de producto

Incluir:
Archivo readme.md
A tener en cuenta: en la Rúbrica de Evaluación (ubicada en la carpeta de la camada) encontrarás un mayor detalle respecto a qué se tendrá en cuenta para la corrección.
Importante: La entrega intermedia no supone la realización de un archivo aparte o extra; marca que en este momento se hará una revisión más integral

------------------------------------------------------------------------------------------------------------------

Entregable 7 - Sincronizar counter

Importa el ItemCount.js del desafio 4 en el counter ItemDetail.js y configura el evento de compra, siguiendo los detalles
de manual.

Aspectos a incluir en el entregable:
- Debes lograr separar la responsabilidad del count, del detalle del item y utilizar los eventos emitidos por el ItemCount (onAdd, onSubstract)
- Cuando ItemCount emita un evento (onAdd, onSubstract) se debe almacenar ese valor en un estado interno del ItemDetail para hacer desaparecer
del itemCount una vez se termine el stock.
- Cuando el estado interno del ItemDetail tenga la cantidad de items solicitados mostrar en su lugar un boton que diga
"Terminar mi compra".
- El boton de terminar mi compra debe poder navegar a un componente vacio por el momento en la ruta '/cart'.

------------------------------------------------------------------------------------------------------------------

Entregable 8 - CartContext

Implementa react context para mantener el estado de compra del user, siguiendo los detalles del manual.

CartContext.js con el context y su custom provider (importalo en App.js)
Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto 
{ item {}, quantity}.
Detalle importante: CartContext debe tener la logica incorporada de no aceptar duplicados y mantener su consistencia.

Metodos recomendados:
- addItem(item,quantity)  // Agregar cierta cantidad de un item al carrito.
- removeItem(itemId)      // Remover un item del cart usando su id.
- clear()                 // Remover todos los items.
- isInCart (id)           // True / False.

------------------------------------------------------------------------------------------------------------------

Entregable 9 - Cart View

Expande tu componente Cart.js con el desglose de la compra, y actualiza tu CartWidget.js para hacerlo reactivo al contexto.

Cart.js 
- Debe mostrar el desglose de tu carrito y el precio total.
- Debe estar agregada la ruta ‘cart’ al BrowserRouter.
- Debe mostrar todos los ítems agregados agrupados.
- Por cada tipo de ítem, incluye un control para eliminar ítems.
- De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link 
o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.

CartWidget.js.
- Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems 
están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
- El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas
(dismount, style, etc).

------------------------------------------------------------------------------------------------------------------

Entregable 10 - Item Collection

Conecta tu nueva ItemCollection de Google Firestore a tu ItemListContainer y ItemDetailContainer.

- Conecta tu colección de firestore con el listado de ítems y con el detalle de ítem.
- Elimina los async mocks (promises) y reemplazalos por los llamados de Firestore.
- Si navegas a /item/:id, debe ocurrir una consulta de (1) documento. 
- Si navegas al catálogo, debes consultar (N) documentos con un query filtrado, implementando la 
lógica de categorías y obteniendo el id de categoría del parámetro de react-router :categoryId.


Nota: npm install --save firebase

firebaseConfig = {
    apiKey: "AIzaSyDLJBCwL-TKgATNGc6T2s2cveKqSJD9kAE",
    authDomain: "diegoberlingieri-77aa6.firebaseapp.com",
    projectId: "diegoberlingieri-77aa6",
    storageBucket: "diegoberlingieri-77aa6.appspot.com",
    messagingSenderId: "169923766283",
    appId: "1:169923766283:web:7377f17cf98b7fe298ff0e"

------------------------------------------------------------------------------------------------------------------

Entregable 11 - Item Collection II

Crea tu colección de órdenes.

- Utiliza las operaciones de inserción para insertar tu orden en la colección y 
dale al user su id de orden auto-generada
- Crea los mappings para poder grabar un objeto del formato 
  { buyer: { name, phone, email }, 
    items: [ {id, title, price},
             {id, title, price},
           ],
    date, total 
  }
Pista: Puedes controlar los stocks con multi-gets utilizando los itemId de tu cart.

------------------------------------------------------------------------------------------------------------------

Sacar todos los textos hardcodeados y pasarlo a un JSON.

ver Prettier para acomodar el codigo

Hacer un archivo "routes" con las rutas

hacer un helper para las consultas a la base de datos y no consultar desde los componentes

Restar el stock al hacer una compra.

Hacer una funcion de login.

Hacer la app multilenguaje.

README.MD
aca hay una plantilla https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a
