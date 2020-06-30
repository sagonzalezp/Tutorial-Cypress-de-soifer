# Tutorial-Cypress-de-soifer
Tutorial de Cypress de Pablo Sebastián Soifer (https://www.youtube.com/playlist?list=PLjM3-neCG6qxbI9lGKq2i0Co4kkAPWI0a)

# Instalación:
 - Instalar [Node.js](nodejs.org)
 - Escribir en la consola **npm install cypress --save-dev**

# Ejecutar:
 - Escribir en la consola **.\node_modules\bin\cypress open**
 - Otra opcion puede ser simplemente **npx cypess open**

# A tener en cuenta
 - Si está usando VisualStudio Code este comando agrega una función de autocompletado al archivo sobre el que esté trabajando:
    **/// <reference types="cypress" />**

 - Para este proyecto se agregó el comando **"watchForFileChanges": false** al cypress.json para evitar que las pruebas se corran automáticamente al guardar.