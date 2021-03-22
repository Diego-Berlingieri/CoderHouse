
CAMADA: 14520
ALUMNO: Diego Berlingieri

--------------------------------------------------------------------------------------

ACERCA DEL PROYECTO

Es un e-commerce de indumentaria. Se tomó de inspiracion el sitio de Zara (https://www.zara.com/ar/en/). Un aspecto minimalista y paleta de colores monocromática. Las fotos de los productos fueron extraídas del mismo sitio.

--------------------------------------------------------------------------------------

DEPENDENCIAS Y LIBRERIAS

- React-Bootstrap. Se eligió esta librería por ser popular y tener actualizaciones frecuentes.
ver: https://react-bootstrap.github.io/getting-started/introduction/

- En lugar de un icono o imagen para el carro de compras se utiliza una font (fa-shopping-cart) de FontAwesome.
ver: https://fontawesome.com/

--------------------------------------------------------------------------------------

COMENTARIOS

- Se utiliza Category y no catId para facilitar las pruebas desde la URL.
/itemList/
/itemList/Woman
/itemList/Man
/itemList/Kids

- Para ir al detalle de un producto es necesario hacer clic sobre la imagen del mismo. Se eligió por ser un area grande y alejada del input y botón agregar.

- Los datos se almacenan en un archivo JSON (assets/myDataBase.json).

- Las imagenes de los productos se encuentran en "public/images/products".

- El style del componente CartWidget se hizo dentro del mismo archivo CartWidget.js a modo de práctica. Lo correcto sería tener un archivo css e importarlo.

- El componente NavBar se hizo como clase. El resto de los componentes son funciones.
