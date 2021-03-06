const next = require('next')
const mongoose = require('mongoose');
const express = require('express');
//const bodyParser = require('body-parser')
const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const recipesData = require(filePath)
const authService = require('./services/auth');
const config = require('./config');
const Book = require('./models/book');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');
//const recipeRoutes = require('./routes/recipe');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//secret data for server
 
const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My secret passwords'
  }
]

//Db connection

mongoose.connect(config.DB_URI, { useNewUrlParser: true})
  .then(() => console.log('Database Connected!'))
  .catch(err => console.error(err));


app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json())

  server.use('/api/v1/books', bookRoutes);
  //server.use('/api/v1/recipes', recipeRoutes);

 
  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData);
  })

  server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
      return res.json(secretData);
  })

  server.get('/api/v1/recipes', (req, res) => {
    // return res.json({message: 'Hello World'})
     return res.json(recipesData)
 })

 server.get('/api/v1/recipes/:id', (req, res) => {
   const { id } = req.params
   const recipe = recipesData.find(r => r.id === id)
   return res.json(recipe)
  
  })

  server.post('/api/v1/recipes', (req, res) => {
    const recipe = req.body
    recipesData.push(recipe)
    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(recipesData, null, 2)
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Recipe has been succesfuly added!')
    })
  })

  server.patch('/api/v1/recipes/:id', (req, res) => {
    const { id } = req.params
    const recipe = req.body
    const recipeIndex = recipesData.findIndex(r => r.id === id)
    recipesData[recipeIndex] = recipe
    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(recipesData, null, 2)
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json(recipe)
    })
  })

  server.delete('/api/v1/recipes/:id', (req, res) => {
    const { id } = req.params
    const recipeIndex = recipesData.findIndex(r => r.id === id)
    recipesData.splice(recipeIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(recipesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Recipe has been succesfuly added!')
    })

  })

    // we are handling all of the request comming to our server
     server.get('*', (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res)
  })
  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access!'});
    }
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
}) 