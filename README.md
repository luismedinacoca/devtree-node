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

6. Delete `"type": "module"` from `package.json` file in order to avoid the import server line error in `index.ts` file.

# Lecture 017: Creating a Routing file:

## Moving to a `router.ts` file:
1. Create `router.ts` file in `src` folder.
2. Add the following code:
```js
import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello world from Home');
})

export default router;
```

3. Add more routes:
```js
router.get('/nosotros', (req, res) => {
    res.send('Hello from Nosotros');
})

router.get('/blog', (req, res) => {
    res.send('Hello from Blog');
})
```

4. Go to `server.ts` file and modify:
```js
import router from './router';
app.get('/', router);
```
- It got access to home ('/') only. ✅
- For '/nosotros' or '/blog', it will not work. ❌

5. Fixing the issue:
Replace `app.get('/', router);` with
```js
app.use(router);
```

## Workspace `app.get('/api', router);`

1. In order to work with '/api' you should modify the URL as follows:

    1.1 Home:  `https://localhost:4000/api/`
    1.2 Nosotros: `https://localhost:4000/api/nosotros`
    1.3 Blog: `https://localhost:4000/api/blog`

## Gemini:

The most common and organized way to handle this is to create separate routing files for each set of routes and then import and mount them in your main Express application.

Here's how you could do it:

### 1. Create the routing files:

#### - `routes/apiRoutes.js`: For routes starting with `/api`.
```js
// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// Route for the API homepage
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Route for the "About Us" section of the API
router.get('/nosotros', (req, res) => {
  res.json({ message: 'About us (API)' });
});

// Route for the "Blog" section of the API
router.get('/blog', (req, res) => {
  res.json({ message: 'Blog articles (API)' });
});

module.exports = router;
```

#### - `routes/ecommerceRoutes.js`: For routes starting with `/ecommerce`.
```js
// routes/ecommerceRoutes.js
const express = require('express');
const router = express.Router();

// Route for the Ecommerce homepage
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Ecommerce store' });
});

// Route for the product list
router.get('/productos', (req, res) => {
  res.json({ message: 'Product list' });
});

// Route for the shopping cart
router.get('/carrito', (req, res) => {
  res.json({ message: 'Shopping cart' });
});

module.exports = router;
```

### 2. Import and mount the routers in your main application (app.js or your main application file):
```js
// app.js (or your main file)
const express = require('express');
const app = express();
const port = 4000;

// Import the routers
const apiRoutes = require('./routes/apiRoutes');
const ecommerceRoutes = require('./routes/ecommerceRoutes');

// Mount the routers on the desired base paths
app.use('/api', apiRoutes);
app.use('/ecommerce', ecommerceRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```