# INTRODUCCIÓN

Imagina que estás en una reunión con amig@s, tu celular sobre la mesa, y a tu pareja, que se ha quedado en casa, se le ocurre tener una “conversación” subida de tono a través de whatsapp contigo. Llegan los mensajes y justo tu amig@ más chismos@, que está junto a ti los lee, sólo porque tenías el celular a la vista.

Para situaciones como ésta, nace Sexit, una web para adultos, que permite a los usuarios cifrar sus mensajes para luego ser enviados y recibidos con la más absoluta confidencialidad. Escribes tu mensaje, eliges tu clave, y ¡SEXIT!


## ¿A QUIENES ESTÁ DIRIGIDO?

SEXIT está dirigida a mayores de 18 años cuya necesidad sea tener “sexting” sin comprometer su intimidad. Para lograr esto, SEXIT permite al usuario escoger una clave numeral, que le permitirá cifrar o descifrar sus mensajes y enviarlos o leerlos cuando estime pertinente, otorgando la privacidad necesaria que las parejas necesitan para vivir su sexualidad en plenitud.

Para esto, el usuario:

1.- Ingresa en la web de SEXIT 
2.- Se dirige a la sección OCULTAR/REVELAR
3.- Ingresa un número que servirá como clave para ocultar y revelar sus mensajes. ¡No olvidar compartirlo con tu pareja! 
4.- Escribir el mensaje.
5.- Hacer click en Revelar mensaje u Ocultar mensaje según sea el caso.

- SE PUEDE CAMBIAR EL NÚMERO LAS VECES QUE QUIERAS, SÓLO HAY QUE TENER EN CUENTA QUE EL NÚMERO DEBE SER IGUAL YA SEA PARA OCULTAR O REVELAR.

- SÓLO PERMITE EL USO DE MAYÚSCULAS Y ESPACIOS

- SOLO PERMITE NÚMEROS POSITIVOS.


## DECISIONES DE DISEÑO

Para el diseño de la interfaz decidí hacer algo limpio, simple y directo, debido a que el público objetivo de SEXIT, llega con una necesidad muy puntual, poder hacer sextear seguros.

A través de un menú, el usuario puede acceder a todas las secciones de la web:

- “HOME” que habla en pocas palabras de qué se trata la página.

- “CÓMO FUNCIONA” que trata en 3 pasos lo que debe hacer el usuario para poder ocupar el servicio.

- “OCULTAR / REVELAR” que  es el servicio en sí, de cifrado y descifrado.

El uso de los colores fue escogido con el mismo criterio:

- Grises para las imágenes, para darles un carácter sobrio y no vulgar, debido al contenido gráfico en sí de las fotos.
- Blanco para otorgar simpleza y limpieza. 
- Negro para destacar la información importante.

El contenido de las imágenes debe ser insinuante, sin caer en lo vulgar. 


## EL PROCESO

Partí desarrollando el diagrama de flujo, en donde, después de algunos bocetos, preferí quedarme con la opción que llevaba un menú para facilitar la navegación del usuario en la web por ser una navegación más fluida. 

![Bocetos Diagrama de Flujo](https://ibb.co/DGDzhDt)
![Diagrama de Flujo Escogido](https://ibb.co/Y4gMnPS)
![Bocetos de Páginas](https://ibb.co/pQtF4wF)

Después, para planificarme, organicé mis tareas en Trello.
![Planificación en Trello](https://trello.com/b/Rvzbnp9H/tablero-cifrado-c%C3%A9sar)

Luego, pasé a diseñar el wireframe de la web. 

![Wireframe Sexit HOME](https://ibb.co/tQ6v3p2)
![Wireframe Sexit COMO FUNCIONA](https://ibb.co/RbqGDw3)
![Wireframe Sexit OCULTAR REVELAR](https://ibb.co/Rz6tLPj)

Desde el boceto inicial al prototipo final, no cambió mucho. El único cambio que tuvo, se produjo en la sección “OCULTAR / REVELAR” por que una caja de texto una al lado de la otra separada por botones era muy confusa. Fue por eso que decidí bajar los botones a la caja de entrada del mensaje y así quedó mucho más intuitiva.

El otro cambio que sufrió fue que la sección de “Ingresa tu número” pasó de ser un menú desplegable a ser un input de texto. Esto fue para que el usuario tuviera total libertad de poder ingresar el número de su elección sin tener que restringirlo con selecciones pre establecidas.

Después establecí las guías de diseño (mencionadas en el punto anterior).

Finalmente, comencé el proceso de código. Partí con un pseudo código que me ayudó a ordenar las ideas y saber qué necesitaba para cada cosa de la web, tanto para estudiarlo como para escribirlo en código.

![Pseudo código](https://ibb.co/wgvG1kN)

Para comenzar, escogí hacer el HTML para sentar las bases sobre lo que trabajaría. Luego, pasé a codificar el javascript (acá fue MUY necesario mi pseudo código). Y finalmente terminé con el CSS.


## TESTS DE USABILIDAD

Pude hacer tests con dos personas distintas:

1.- Sujeto 1:

Hombre, 33 años, Ingeniero Matemático.

- Encontró poco práctico tener un botón “ENVIAR CLAVE”. Preferiría que el botón “Revelar / ocultar mensaje” hiciera eso también.

- Intentó escribir con minúsculas. En ningún lado advierte que SÓLO cifra usando mayúsculas.


2. -Sujeto 2:

Mujer, 33 años, Educadora Diferencial.

- Encontró poco práctico tener un botón “ENVIAR CLAVE”. Preferiría que el botón “Revelar / ocultar mensaje” hiciera eso también.

- Intentó escribir con minúsculas. En ningún lado advierte que SÓLO cifra usando mayúsculas. Le gustaría que también pudiera aceptar minúsculas.

- Le gustaría que tuviera vinculación con WhatsApp.


#### RESULTADOS DE LOS TESTS:

En el siguiente orden, contemplaría hacer los siguientes cambios a futuro:

1.- Hacer código para que acepte minúsculas.

2.- Remover el botón “Enviar Clave”, dejando sólo dos botones funcionales.

3.- Vinculación con WhatsApp.
