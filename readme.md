![slalomH](https://user-images.githubusercontent.com/89102805/176746232-febdca81-432c-4b43-99fe-bbd132b8797f.png)

# Practica desarrollo web
Este ejercicio consistió en replicar el comportamiento de la pagina principal de [slalom]( https://www.slalom.com/).

Aunque de base tenemos HTML, CSS Y JavaScript, se decidió implementar React principalmente para aprovechar el uso de componentes y no estar repitiendo código en algunas secciones como en las cards. Además, nos permite tener un código más organizado y escalable.

De igual manera en un principio se quiso aprovechar los componentes de Bootstrap para facilitar el desarrollo de algunas secciones de la página, pero conforme se avanzo en el desarrollo, esta decisión resulto poco favorable dado que la personalización y adaptabilidad de estos no cubría las necesidades deseadas, por lo que poco a poco se fue optando más por la estilización tradicional. No obstante, el framework sí que represento una ventaja en la primera sección de la página.

Por otro lado, se usó webpack y babel para asegurar que el código funcione en todos los navegadores y estuviera listo para implementarse, puede ver la versión de producción en la rama [deploy]( https://github.com/Elchicogamer117/slalomChallenge/tree/deploy).

Puede ver el resultado final [Haciendo click aquí](https://elchicogamer117.github.io/slalomChallenge/)

## Resultados

### Header y main

La sección principal es la que, por lo general, más tiempo se le dedica, puesto que es la presentación, la primera impresión, y lo que mas gente vera. En un principio se quiso implementar un video de fondo como en la página original, pero hubo problemas al momento de trabajarlo con webpack dado que solo estaba optimizado para imágenes y como el tiempo era limitado, se opto por aprovechar el carrusel de Bootstrap para lograr un resultado similar.

![Header](https://user-images.githubusercontent.com/89102805/176747277-5e70526b-d735-4db7-ba3d-8696c863c775.gif)
![FF](https://user-images.githubusercontent.com/89102805/176754710-de0ef9d4-0b0a-427e-bc43-7d073c0ffba3.gif)

### What we do
Esta es una de las secciones donde mas se aprovecharon las ventajas de react, para hacer la galería de casos de estudio, se generó la card y el diseño en un componente y se construyó una mini base de datos local en un archivo JSON, posteriormente en un contenedor se llamo a la base de datos y se mapearon los datos en la card para cada objeto, generando así el resultado mostrado a continuación sin necesidad de repetir el código y facilitando la escalabilidad del mismo, puesto que solo se deben de agregar mas objetos al archivo json.

![WhatWeDo](https://user-images.githubusercontent.com/89102805/176747622-accd570c-5ea9-4664-99fe-2473345eea8b.gif)

### Technology Platforms
Como se puede observar, una de las prioridades fue lograr que la pagina se viera y comportara lo más similar a la versión original y para lograr esto se usaron las mismas imágenes traídas desde la URL para evitar generar demasiados assets locales.

![TechnologyPlatforms](https://user-images.githubusercontent.com/89102805/176747678-9279fd22-547e-4373-80da-0f8cd0e136bb.gif)
![G1](https://user-images.githubusercontent.com/89102805/176754355-aae9423a-98b3-4dc8-b6f4-49f48bcc28b1.gif)

### What we’re thinking
Esta sección también se trabajó con mapeo de datos, pero el principal reto aquí fue el acomodo de cada componente y el diseño responsive, como se comentó en un principio, las facilidades que brindaba Bootstrap no fueron suficiente para generar el resultado esperado, al menos con el conocimiento actual del framework, si bien en un principio se genero un resultado muy similar usando la grilla de Bootstrap, al hacer la versión móvil, la grilla no se comporto como se esperaba además de que se presentaron problemas con el ancho de los componentes excediendo el ancho de la página. Al final se uso la grilla nativa de CSS.

![WhatWereThinking](https://user-images.githubusercontent.com/89102805/176747723-4601ea0b-3318-4fb0-94ec-8e5afcbed7d8.gif)
![H1](https://user-images.githubusercontent.com/89102805/176754998-04340ceb-a32a-434c-9650-81a7367a39a5.gif)

### Footer
Creo que esta es la sección que menos importancia se le da, pero que más peso tiene, puesto que es donde se encuentra toda la información importante y de contacto. El principal reto de esta sección fue lograr un responsive tan completo puesto que, como se puede observar, es jugar con cada uno de las secciones y elementos de manera individual para lograr que se adapten a cada tamaño de pantalla.

![Footer](https://user-images.githubusercontent.com/89102805/176747879-c61cd59e-471c-4748-988b-b56487261599.gif)
![D1](https://user-images.githubusercontent.com/89102805/176755086-c3906997-4655-48a6-9531-2e05c3f9eee0.gif)

