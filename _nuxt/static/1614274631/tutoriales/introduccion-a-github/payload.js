__NUXT_JSONP__("/tutoriales/introduccion-a-github", (function(a,b,c,d,e,f,g,h){c[0]="migueabellan";c[1]="fabiopolancoe";h.cdate="2019-04-01 00:00:00";h.mdate="2020-06-07 10:03:17";return {data:[{tutorial:{alias:"introduccion-a-github",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[],software:[],level:[e,f],others:[]},extra:{level:"Iniciación",duration:"30 minutos",videos:g},date:h},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fintroduccion-a-github\u002Fimg\u002Fpreview.jpg",date:h,tags:[d,e,f],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fintroduccion-a-github\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial vamos a explicar cómo crear una cuenta y repositorios desde la propia interfaz web de GitHub.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## ¿Qué es GitHub?\n\nAntes de explicar qué es GitHub, conviene explicar qué es Git.\n\n\u003E Git es un software de control de versiones diseñado por Linus Torvalds.\n\nVale, pero... ¿Qué es un control de versiones?\n\n\u003E El control de versiones es un sistema que registra los cambios realizados sobre un documento a lo largo del tiempo, de modo que puedas recuperar versiones específicas de dicho documento.\n\nEntonces, ¿Qué es GitHub?\n\n\u003E GitHub es una plataforma en línea, propiedad de Microsoft para alojar proyectos, notas, software e incluso páginas web accessibles desde toda la Web (Con un dominio tu_pagina.github.io o incluso uno personalizado que tengas) por medio de su servicio gratuito [GitHub Pages](https:\u002F\u002Fpages.github.com). Utilizando el sistema de control de versiones de Git.\n\n**Ejemplo**\n\nSupongamos que estamos escribiendo un carta y a medida que redactamos un párrafo guardamos el documento con el estado actual. Al cabo de 3 párrafos tendremos 3 versiones del documento.\n\n- Versión 1: 1er párrafo\n- Versión 2: 1er y 2º párrafo\n- Versión 3: 1er, 2º y 3er párrafo\n\nSupongamos que nos arrepentimos del texto redactado en el 2º párrafo y lo borramos. En este caso tendremos 4 versiones.\n\n- Versión 1: 1er párrafo\n- Versión 2: 1er y 2º párrafo\n- Versión 3: 1er, 2º y 3er párrafo\n- versión 4: 1er y 3er párrafo\n\nViendo esto podemos ver que aunque en la última versión de nuestro documento no aparece el 2º párrafo, realmente lo tenemos guardado en la versión 2 y 3 de nuestro historial, con lo cual en un futuro podríamos acceder a dichas versiones para recuperar el texto del 2º párrafo.\n\n![](img\u002Fcarta.jpg \"Ejemplo\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Crear una cuenta\n\nPara crear una cuenta GitHub accedemos a la web [Join GitHub](https:\u002F\u002Fgithub.com\u002Fjoin) e introducimos los datos solicitados. A continuación nos llegará un correo para confirmar la cuenta.\n\n![](img\u002Fjoin.jpg \"Crear cuenta\")\n\nUna vez registrados podemos editar nuestro perfil para añadir una imagen, descripción, y datos que queramos mostrar de forma pública.\n\n![](img\u002Fperfil.jpg \"Perfil\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Crear un repositorio\n\nEn Git, un repositorio es un espacio utilizado para almacenar algún tipo de información. Por ejemplo, podemos crear un repositorio para guardar la carta que anteriormente mencionábamos. En ese mismo repositorio podemos guardar las imágenes utilizadas en la carta u otros documentos relacionados. Podría decirse que un repositorio es una carpeta donde guardamos uno o más documentos.\n\nPara añadir un repositorio hacemos clic sobre el icono `+` situado en la parte superior derecha de la pantalla y a continuación `New repository`. El siguiente paso será añadir el nombre del repositorio y de forma opcional una breve descripción (Puedes elegir si va a ser privado o público; su licencia, y agregarle un README.md, que es una descripción e información general de tu proyecto; pero éso se tratará después). Por último creamos el repositorio.\n\n![](img\u002Fperfil.jpg \"Perfil\")\n\nUna vez creado el repositorio vamos a crear un documento con el texto `Hola Mundo`. Para crear el documento hacemos clic sobre `create a new file`.\n\n![](img\u002Ffile.jpg)\n\nPor último, añadimos el nombre del fichero `hola` y en la descripción `Hola Mundo`. Abajo del todo hacemos clic sobre el botón `Commit new file` para guardar el documento. \n\n\u003E Si te fijas, puedes observar que puedes añadir un título y descripción a la versión que vas a guardar de ese documento.\n\nUna vez guardado te aparecerá el documento en el repositorio.\n\n![](img\u002Fguardado.jpg \"Guardado\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Formato Markdown\n\nMarkdown es un lenguaje de marcado ligero, primo lejano del HTML (Incluso puedes instertar HTML en Markdown), con extensión `.md`, cuyo objetivo es conseguir la máxima legibilidad y facilidad de publicación usando texto plano (De hecho, éste tutorial fué escrito en Markdown).\n\nEn el siguiente [repositorio](https:\u002F\u002Fgithub.com\u002Fadam-p\u002Fmarkdown-here\u002Fwiki\u002FMarkdown-Cheatsheet) podemos ver un resumen de las etiquetas utilizadas en este formato.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Repositorios privados y públicos\n\nSupongamos que quieres crear un, hmmm... Código para [Arduino](https:\u002F\u002Fwww.programoergosum.es\u002Ftutoriales\u002Ftags\u002Farduino), lo escribes en el IDE y decides publicarlo. Cuando vas a GitHub y cuando creas un repositorio piensas que sería mejor primero trabajar un poco en él sin que nadie pueda interactuar con el repositorio y después hacerlo público.\n\nÉsto es muy válido y tiene una solución: repositorios privados. Puedes configurar un repositorio como privado desde que lo creas:\n\n![](img\u002Frepo_privado.png \"Repositorio Privado\")\n\n\u003E También puedes volver privados tus repositorios públicos y viceversa.\n\n### De público a privado\n\nEntra a tu repositorio, haz click en `Settings`, baja hasta el apartaado que dice `Danger zone` y haz click en el botón `Make Private`. Saldrá una ventana que te pedirá que escribas tu nombre de usuario seguido de un diagonal `\u002F` y el nombre de tu repositorio.\n\n![](img\u002Fmake_private.png \"Hacer privado\")\n\n### De privado a público\n\nEl proceso es el mismo sólo que cambiand el botón de \"Make private\" a \"Make public\"\n\n### Licencia\n\nLa licencia es un documento que indica cómo las personas pueden usar los archivos de tu proyecto, puedes elegir una aquí:\n[Choose a license](https:\u002F\u002Fchoosealicense.com\u002F)\n\n### README.md\n\nUn archivo README.md es un archivo Markdown que provee datos, información e instrucciones sobre tu repositorio.\n\n### GitHub Pages\n\n¿Tienes los archivos de una página web que quieras hacer pública? Lo puedes hacer con [GitHub Pages](https:\u002F\u002Fpages.github.com), sólo necesitas crear un repositorio con los archivos. Ve a `Settings`, baja hasta encontrar el apartado GitHub Pages y selecciona `Master Branch`.\n\nListo, puedes acceder a tu página desde `https:\u002F\u002Ftu_nombre_de_usuario.github.io\u002Ftu_repositorio`\n\n### GitHub Gists\n\nPuedes crear [GitHub Gists](https:\u002F\u002Fgists.github.com), que son como repositorios pero con ún sólo archivo, que puede ser una nota, código, instrucciones o lo que quieras. Sólo haz click en el símbolo `+` situado en la parte superior derecha de la pantalla y `New Gist`. \n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Ejercicios propuestos\n\n1.- Entra a tu perfil de GitHub para añadir una foto y una descripción a tu perfil.\n\n2.- Añade un documento desde el escritorio arrastrándolo a la ventana de GitHub. **_Recuerda que todo el contenido compartido es público. No subas datos sensibles_**.\n\n3.- Crea un fichero llamado `prueba.md` e introduce al menos 5 etiquetas diferentes utilizando el formato Markdown.\n\n4.- Crea un archivo README.md\n\n5.- Crea un Gist\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fintroduccion-a-github\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:g}]}],fetch:[],mutations:[]}}("Introducción a GitHub","Control de versiones GIT en la plataforma GitHub.",Array(2),"Informática","Secundaria","Bachillerato","",{})));