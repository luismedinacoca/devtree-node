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

2. Go to `index.js` file and modify:
```js
//const express = require('express');   // CJS: Common JS
import express from 'express'           // ESM: EcmaScript Modules
```

## Using env variables:
```js
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ', port);
})
```

# Lecture 014:

## Install typescript:
```bash
npm i -D typescript ts-node
```
1. Open `package.json` file:
```js
  "devDependencies": {
    "nodemon": "^3.1.10",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3"
  }
```
Express does not support Typescript


2. Create `tsconfig.json` file:
```js
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ESNext"],
    "target": "ESNext",
    "moduleResolution": "NodeNext",
    "module": "NodeNext",
    "strict": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "declaration": true,
  },
  "include":["src/**/*.ts"]
}
```

3. Create `src` folder then insert the `index.js` file in it.

4. In case it couldn't run, execute:
```js
  "scripts": {
    "watch": "node --watch src/index.js",
    "dev": "nodemon --exec ts-node src/index.js"
  },
```

5. Having this error in:
```js
import express from 'express';
```
install the following dependency:
```bash
npm i --save-dev @types/express
```