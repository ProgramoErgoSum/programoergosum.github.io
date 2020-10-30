__NUXT_JSONP__("/tutoriales/instalar-raspbian-con-etcher", (function(a,b,c,d,e,f,g,h,i,j){c[0]="migueabellan";j.cdate="2019-04-01 00:00:00";j.mdate="2019-10-26 16:08:12";return {data:[{tutorial:{alias:"instalar-raspbian-con-etcher",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[e],software:[],level:[f,g],others:[h]},extra:{level:"Iniciación",duration:"45 minutos",videos:i},date:j},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Finstalar-raspbian-con-etcher\u002Fimg\u002Fpreview.jpg",date:j,tags:[d,e,f,g,h],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Finstalar-raspbian-con-etcher\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial vamos a explicar cómo instalar el sistema operativo Raspbian en Raspberry Pi utilizando el clonado de una imagen con Etcher. Raspbian es el sistema operativo recomendado para Raspberry Pi (al estar optimizado para su hardware) y se basa en una distribución de GNU\u002FLinux llamada Debian.\n\n### Antes de empezar\n\nVas a necesitar los siguientes componentes:\n\n- Raspberry Pi\n- PC con conexión a Internet\n- Lector de tarjetas SD\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Imagen de Raspbian\n\nUna imagen es un archivo que contiene la estructura y los contenidos completos de un sistema operativo, es decir, una copia exacta del sistema operativo y contenido. Esto es útil cuando queremos que todos nuestros equipos dispongan de la misma configuración y con los mismos programas instalados, mismas carpetas, etc.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Descargar imagen de Raspbian\n\nPara descargar la imagen del sistema operativo Raspbian para Raspberry Pi accederemos al apartado de [descargas](https:\u002F\u002Fwww.raspberrypi.org\u002Fdownloads\u002Fraspbian\u002F) y elegimos la versión a instalar. El tiempo de descarga suele ser de 10 minutos aproximadamente dependiendo de la conexión a internet.\n\n![](img\u002Fdescarga.jpg)\n\n- `Raspbian Buster with desktop and recommended software`: Versión completa con entorno gráfico y programas recomendados.\n- `Raspbian Buster with desktop`: Versión completa con entorno gráfico (ventanas, carpetas, etc.).\n- `Raspbian Buster Lite`: Versión reducida sin entorno gráfico (modo consola).\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Instalar Etcher\n\nLa imagen del sistema operativo se instalará sobre una tarjeta SD. Por ello, mientras se descarga la imagen de Raspbian, vamos a descargar e instalar el programa [Etcher](https:\u002F\u002Fetcher.io) (recomendado por Raspberry Pi) que utilizaremos para copiar la imagen de Raspbian en la tarjeta SD.\n\n![](img\u002Fetcher.jpg \"Etcher\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Clonar la imagen con Etcher\n\nUna vez descargada la imagen de Raspbian e instalado el programa Etcher, lo abrimos y seleccionamos la imagen y la tarjeta donde queremos copiar el sistema operativo. Hacemos clic en `Flash` y esperamos a que el proceso finalice. Este proceso suele tardar 20 minutos aproximadamente.\n\nUna vez finalizado el proceso de copiado conectamos la tarjeta SD a la Raspberry Pi y al encenderla arrancará directamente el sistema operativo Raspbian.\n\n![](img\u002Fraspbian.jpg \"Clonar imagen Raspbian\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Primer arranque\n\nEn el primer arranque de nuestro sistema operativo Raspbian clonado a partir de una imagen, se ejecuta un proceso para asignar el espacio completo de nuestra tarjeta SD para aprovechar al máximo su capacidad.\n\nEsto podemos comprobarlo ejecutando el comando `df -h` donde deberá aparecer el tamaño total de nuestra SD. En el ejemplo tenemos una tarjeta SD de 32GB.\n\n```sh\npi@raspberrypi:~ $ df -h\nS.ficheros     Tamaño Usados  Disp Uso% Montado en\n\u002Fdev\u002Froot         30G   4,7G   24G  17% \u002F\ndevtmpfs         460M      0  460M   0% \u002Fdev\ntmpfs            464M      0  464M   0% \u002Fdev\u002Fshm\ntmpfs            464M    12M  452M   3% \u002Frun\ntmpfs            5,0M   4,0K  5,0M   1% \u002Frun\u002Flock\ntmpfs            464M      0  464M   0% \u002Fsys\u002Ffs\u002Fcgroup\n\u002Fdev\u002Fmmcblk0p1    43M    22M   21M  51% \u002Fboot\ntmpfs             93M      0   93M   0% \u002Frun\u002Fuser\u002F1000\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Ejercicios propuestos\n\n1.- Instala el sistema operativo Raspbian a partir de una imagen.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Finstalar-raspbian-con-etcher\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:i}]}],fetch:[],mutations:[]}}("Instalar imagen de Raspbian en Raspberry Pi","Instalación del sistema operativo Raspbian a través de una imagen con Etcher.",Array(1),"Informática","Raspberry Pi","Secundaria","Bachillerato","Raspbian","",{})));