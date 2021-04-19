
# MELLO

### ALUMNO: Diego Berlingieri
### CAMADA: 14520

## Source Code: https://github.com/Diego-Berlingieri/CoderHouse-ReactJs

## Live Demo: https://ch-reactjs.netlify.app/

--------------------------------------------------------------------------------------

## ACERCA DEL PROYECTO

Es un e-commerce de indumentaria. Se tomó de inspiración el sitio de Zara (https://www.zara.com/ar/en/). Un aspecto minimalista y paleta de colores monocromática. Las fotos de los productos fueron extraídas del mismo sitio.

--------------------------------------------------------------------------------------

## DEPENDENCIAS Y LIBRERIAS UTILIZADAS

### React Js
Librería de Javascript para construir interfaces de usuario. [Ir a ReactJs](https://reactjs.org/docs/getting-started.html). Instalar por consola:
```
npx create-react-app ch-react-app
```

### React router
Librería de componentes para la navegación. [Ir a React-router](https://reactrouter.com/web/guides/quick-start). Instalar por consola:
```
npm install react-router-dom
```

### Firebase
Firestore base de datos de Firebase. [Ir a Firebase](https://firebase.google.com/docs/guides). Instalar por consola:
```
npm install --save firebase
```

### React-Bootstrap
Se eligió esta librería por ser popular y tener actualizaciones frecuentes. [Ir a React-bootstrap](https://react-bootstrap.github.io/getting-started/introduction/). Instalar por consola:
```
npm install react-bootstrap bootstrap
```

### Cloudinary
Las imagenes de los productos se subieron al media optimizer Cloudinary. [Ir a Cloudinary](https://cloudinary.com/documentation)

### Fontawesome
En lugar de un icono o imágenes se utilizaron fonts de FontAwesome en los siguientes componentes:
```
CartWidget    fa-shopping-cart
CartList      fa-trash-alt
ItemCount     fa-minus
ItemCount     fa-plus
NavBar        fa-globe
```
[Ir a Fontawesome](https://fontawesome.com/)

### Github
Repositorio en Github para las entregas
[Source](https://github.com/Diego-Berlingieri/CoderHouse-ReactJs)

### Netlify
Se creó un ambiente en Netlify. [Ir a Netlify](https://docs.netlify.com) Este toma la ultima versión compilada (build) de Github y hace un deploy automático. [LIVE DEMO](https://ch-reactjs.netlify.app/)

--------------------------------------------------------------------------------------

## COMENTARIOS

### Home / Lista de ítems
  Se puede filtrar el listado de items, seleccionando una categoría de productos.
  Para ir al detalle de un producto es necesario hacer clic sobre la imagen del mismo.

### Detalle de un producto.
  En esta instancia, se puede agregar una cantidad del articulo al carro de compras.
  La cantidad se determina con los botones + y -. Al hacer clic en *"Agregar al carro"* se agregan al mismo.
  Esta cantidad, se descuenta del stock disponible de la sesion. No se modifica el stock en la base de datos.
  No se permitirá agregar más items al carro de los que hayan restantes de stock.

### Carro de compras
  A medida que se agregen items al carro de compras, se actualizará la cantidad de items en el widget (esquina
  superior derecha).
  Para visualizar el carro de compras, hacer clic en el widget. Mientras el carro de compras se encuentre vacío,
  el widget permanecerá deshabilitado.
  En el carro de compras, se muestra el detalle de items, precio unitario, subtotal por item y total general.
  Se puede vaciar el carro por completo o eliminar cada ítem.

### Checkout / Finalizar compra
Al hacer clic en *"Grabar pedido"* se verifica que los campos Nombre, Telefonno y Email tengan datos. También
se verifica que el Email cumpla con una mascara *"xxxx@yyyy.zzz"*. Si no se cumplen todas estas condiciones,
se muestra una alerta indicando el o los errores a corregir.

Al grabar el pedido en la base de datos, se verificará por cada item del carro, que haya stock suficiente.
Dado que el stock puede cambiar desde que el usuario consulto un artículo hasta que finaliza el pedido, se procede:
- En caso de no haber stock de un ítem, este sera removido del pedido.
- El pedido se grabará con aquellos items que si disponen de stock.
- Se descuenta el stock de los items del pedido.
- Se informa al usuario su Id de pedido.
- Se notifica al usuario aquellos items que fueron removidos para que en caso de requerirlos, realice un nuevo pedido.

### Multi-language. Se agregaron los idiomas español e inglés.
La web intentara mostrar el lenguaje del internet browser. En caso de no encontrarlo, se mostrará 
el contenido en inglés. Luego, se puede cambiar desde el icono del mundo en la navbar.
Los datos estan almacenados en un archivo JSON *(assets/languages.json)* y son publicados por su propio
context y provider.
