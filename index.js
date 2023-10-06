const express = require('express')
const routerCachorro = require('./src/routes/cachorro.js')
const router = require('./src/routes/cliente.js')
const app = express()
const port = 3000

app.use(express.json())
app.use(router)
app.use(routerCachorro)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})