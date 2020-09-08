const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json())

  server.get('/api/v1/recipes', (req, res) => {
    return res.json({message: 'Hello World'})
  })

  server.post('/api/v1/recipes', (req, res) => {
    const recipe = req.body
    console.log(JSON.stringify(recipe))
    return res.json({...recipe, createdTime: 'today', author: 'Mudassar'})
  })

  server.patch('/api/v1/recipes/:id', (req, res) => {
    const { id } = req.params
    return res.json({message: `Updating post of id: ${id}`})
  })

  server.delete('/api/v1/recipes/:id', (req, res) => {
    const { id } = req.params
    return res.json({message: `Deleting post of id: ${id}`})
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