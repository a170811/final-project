#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 10055





app.use(express.static(__dirname + '/public'))



app.listen(port, () => {
  console.log( `listening on port: ${port}` )
})


