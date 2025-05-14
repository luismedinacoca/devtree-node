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