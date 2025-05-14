# Lecture 012:

## Librerías de Desarrollo:
```bash
npm i -D nodemon
```
ó
```bash
npm i --save-dev nodemon
```

Go to package.json file:
```js
"devDependencies": {
  "nodemon": "^3.1.10"
}
```

## Dependencias de Producción:
```bash
npm i express
```

```js
  "dependencies": {
    "express": "^5.1.0"
  },
```

## Modificar el script:
```js
  "scripts": {
    "dev": "node --watch index.js",
    "nodemon": "nodemon index.js"
  },
```
ejecuta desde la terminal:
1. Para watch:
```bash
npm run dev
```

2. Para nodemon:
```bash
npm run nodemon
```

# Lecture 013:

## Change from require to import:
1. open `package.json` file and add:
```js
{
  "type": "module",
}
```

2. Go to index.js file and modify:
```js
//const express = require('express');   // CJS: Common JS
import express from 'express'           // ESM: EcmaScript Modules
```

## Using env variables:
```js
const port = pñrocess.env.PORT || 4000;

app.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ', port);
})
```