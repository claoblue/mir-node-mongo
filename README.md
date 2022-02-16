# Node & MongoDB
## Party AppServer

Vamos a hacer una fiesta para celebrar un matrimonio y queremos crear un sitio web para enviar invitaciones y que nos puedan confirmar su asistencia. Para este ejercicio, queremos hacer un par de colecciones una para invitados y otra para familias. La idea de tener una colección de familia es para poder agrupar invitados y que el envío de invitaciones no sea tan grande.

Los documentos para cada colección van a tener el siguiente modelo de datos:

Invitados:

- Nombre
- Recomendaciones de comida
- Confirmación de asistencia


Familia:

- Código de confirmación: la idea de este código es que las invitaciones los lleven y con él puedan ingresar a la plataforma para confirmar asistencia de cada miembro de la familia.
- Nombre
- Invitados: vamos a asociar los invitados que necesitamos para cada familia
- Email
- Número de celular
- Confirmación de envío del formulario: la idea es que una vez envíen el formulario se almacene en la base datos, para poder filtrar y saber quienes no han confirmado, para poder llamarlos.
- Comentarios: para que los invitados dejen un comentario


## Instalación y correr el servidor de express

Para instalar los paquetes, correr el siguiente comando en la terminal

```
npm install
```

Para poner en marcha el servidor de express en el ambiente de desarrollo se corre el siguiente comando

```
npm run dev
```
