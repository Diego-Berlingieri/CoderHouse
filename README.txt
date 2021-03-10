
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

Estado: 

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