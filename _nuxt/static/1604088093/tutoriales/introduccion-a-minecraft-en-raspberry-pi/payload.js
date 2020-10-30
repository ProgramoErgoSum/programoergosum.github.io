__NUXT_JSONP__("/tutoriales/introduccion-a-minecraft-en-raspberry-pi", (function(a,b,c,d,e,f,g,h,i,j,k){b.cdate="2017-06-01 00:00:00";b.mdate="2019-10-26 14:05:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"introduccion-a-minecraft-en-raspberry-pi",title:a,description:f,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[e],software:[k],level:[g,h],others:[i,j]},extra:{level:"Iniciación",duration:"45 minutos",videos:"3 vídeos"},date:b},title:a,description:f,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fintroduccion-a-minecraft-en-raspberry-pi\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,k,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fintroduccion-a-minecraft-en-raspberry-pi\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este curso aprenderás a programar en Python utilizando Minecraft Pi para aprender conceptos de programación informática. Si lo que estás buscando son consejos útiles para construir esctructuras o luchar en combates este no es el curso que buscas.\n\nAunque Minecraft es multiplataforma y está disponible para Windows, Linux o MAC en su versión extendida, en este curso se va a utilizar Minecraft Pi por ser gratuito y estar instalado por defecto en las versiones de Raspbian para Raspberry Pi.\n\n![](img\u002Fpython-en-minecraft-pi.jpg \"Python en Minecraft Pi\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## ¿Qué es Minecraft?\n\nMinecraft es un juego indie sandbox, en el que construyes estructuras, recolectas objetos, extraes minerales y peleas con mosntruos para sobrevivir. Se muestra como un mundo virtual en 3D, creado con diferentes tipos de bloques, cada uno de ellos con su propio lugar dentro de la disposición en la parrilla del mundo virtual 3D.\n\nLos juegos indie son \"videojuegos independientes\", creados por pequeños equipos. Como resultado de su naturaleza independiente suelen ser más innovadores que otros más comerciales.\n\nEn un juego sandbox, eres un jugador dentro de un mundo virtual donde tomas tus propias decisiones desde el principio en vez de verte forzado a seguir una ruta creada por los diseñadores del juego, es decir, creas tus propias historias y te mueves a través del mundo 3D libremente aprendiendo nuevas funcionalidades o descubriéndolas por casualidad a través de experimentación.\n\n![](img\u002Fminecraft.jpg \"Minecraft\")\n\n### ¿Qué es Minecraft Pi?\n\nMinecraft Pi Edition es una versión de Minecraft desarrollado para procesadores de bajo coste como Raspberry Pi. Se basa en la ya existente Pocket Edition, pero está ligeramente modificada, que contiene un conjunto de características revisadas y un soporte para múltiples lenguajes de programación.\n\nEstá pensada como una herramienta educativa para los programadores principiantes y está disponible para su descarga de manera gratuita, bajo la licencia GNU, desde la página de descargas de Minecraft Pi.\n\n![](img\u002Fminecraft-pi.jpg \"Minecraft Pi\")\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## ¡Hola Mundo!\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002Fs7f9oTdf3dI\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEl primer programa que se va a programar en Python consistirá en mostrar el mensaje \"Hola Mundo\" a través del chat de Minecraft Pi. Para ello, debemos ejecutar Minecraft Pi y tenerlo activo al mismo tiempo que estamos programando.\n\nA continuación iniciaremos el IDLE de Python para escribir las instrucciones del código que vamos a programar. Podemos escribir el código directamente en la Shell o abrir un fichero nuevo donde guardaremos el código escrito en Python.\n\n```python\nfrom mcpi.minecraft import Minecraft\nmc = Minecraft.create()\nmc.postToChat(\"Hola Mundo\")\n```\n\nUna vez ejecutado el código anterior en la consola observarás una imagen similar a la siguiente donde aparece el mensaje introducido en el chat de Minecraft. Recuerda que si escribes el código en el fichero, deberás guardar y ejecutar el código para ver los resultados.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## ¡Hola Mundo!\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FpfUBQU1uyg8\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn esta lección vamos a programar diferentes movimientos conociendo la posición de nuestro personaje Steve en el mapa, o lo que es lo mismo, en nuestro mundo.\n\nRecuerda que cada bloque de Minecraft representa un cubo, y cada cubo mide 1 unidad. Por lo tanto, si nos desplazamos 3 bloques, nos estamos desplazando 3 unidades. El mundo está construido con bloques vacios que se rellenan con materiales (piedra, madera, lana, aire...). Hay varias excepciones como la lava o las alfombras que ocupan menos espacio y no pueden combinarse con otros bloques.\n\nDicho todo esto, nuestro personaje se encontrará en todo momento una determinada posición dentro de nuestro mundo y poseerá unas determinadas coordenadas (x, y, z). Una coordenada representa una posición única en 3 dimensiones dentro de nuestro mundo.\n\n\u003E Las coordenadas en Minecraft vienen representadas como si de una brújula se tratase, y se representan del siguiente modo.\n\n![](img\u002Fbrujula.jpg \"Brújula\")\n\nVisto lo anterior y sabiendo el funcionamiento de las coordenadas en Minecraft, para mostrar la posición de nuestro personaje Steve ejecutaremos la siguiente instrucción.\n\n```python\nprint(mc.player.getPos())\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Programando bloques\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F_-8kmz22MyY\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn esta lección vamos a programar diferentes tipos de bloques para que aparezcan en posiciones establecidas conociendo las coordenadas.\n\nEn Minecraft, cada bloque está representado por un número (que conocerás si eres jugador habitual de Minecraft), y nos referiremos a dicho bloque por programación.\n\n![](img\u002Fbloques.jpg \"Bloques\")\n\nDe momento vamos a empezar escribiendo un programa sencillo encargado de colocar de forma automática un bloque inmediatamente justo delante del jugador. Una vez puedas colocar un bloque en el mundo de Minecraft, podrás construir cualquier cosa que se te ocurra de forma automática. Es decir, dadas unas coordenadas \"x, y, z\" y sabiendo que el bloque número \"1\" correspone al bloque de \"piedra\", escribiremos el siguiente código:\n\n```python\nfrom mcpi.minecraft import Minecraft\nfrom mcpi import block\nmc = Minecraft.create()\nmc.setBlock(x, y, z, block.STONE.id)\n```\n\nPor otro lado, supongamos que queremos obtener el tipo de un bloque situado en una coordenada, es decir, quiero saber si en una posición tengo un bloque de dinamita para no pasar sobre el bloque. En este caso utilizaremos la función que obtiene el tipo de bloque.\n\n```python\nmc.getBlock(x, y, z)\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Retos propuestos\n\nSi ya has completado todas las lecciones del tutorial te proponemos resolver los siguientes retos de programación.\n\n### Reto 1: ¿Qué bloque está pisando Steve?\n\nEn este reto te proponemos que programes en Python un algoritmo que muestre a través del chat de Minecrat Pi el número de bloque que está pisando el personaje Steve. Para ello deberás utilizar las instrucciones estudiadas en las lecciones anteriores de este curso. Para el correcto funcionamiento deberás importar la libreria correspondiente que pausa los mensajes en el chat durante unos segundos.\n\n![](img\u002Freto-1.gif \"¿Qué bloque está pisando Steve?\")\n\n### Reto 2: Hazte paso a través de los bloques\n\nEn este reto te proponemos que programes en Python un algoritmo encargado de borrar todos los bloques que se encuentra Steve a su paso por el mundo de Minecraft. Solamente deberás borrar los bloques que encuentres delante, detrás y a sus lados derecha e izquierda. Para el correcto funcionamiento deberás borrar los bloques contiguos al personaje conociendo el sistema de corrdenadas.\n\n![](img\u002Freto-2.gif \"Hazte paso a través de los bloques\")\n\n### Reto 3: El camino del Rey\n\nEn este reto te proponemos que programes en Python un algoritmo que añada bloques debajo del personaje Steve, de tal forma que si te situas en lo alto de una colina, parecerá que estás caminando entre las nubes. Para el correcto funcionamiento deberás colocar los bloques contiguos al personaje conociendo el sistema de corrdenadas\n\n![](img\u002Freto-3.gif \"El camino del Rey\")\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fintroduccion-a-minecraft-en-raspberry-pi\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Introducción a Minecraft en Raspberry Pi",{},Array(1),"Programación","Raspberry Pi","Aprende a programar tus propios mundos en Minecraft Pi  con el lenguaje de programación Python.","Secundaria","Bachillerato","Raspbian","Minecraft","Python")));