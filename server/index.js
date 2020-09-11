const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')
const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const recipesData = require(filePath)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json())

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

  // server.get('/faq', (req, res) => {
  //   res.send(`
  //     <html>
  //       <head></head>
  //       <body><h1>Hello World!</h1>
  //       </body>
  //     </html>
  //   `)
  // })

  // we are handling all of the request comming to our server
  server.get('*', (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res)
  })
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
}) 