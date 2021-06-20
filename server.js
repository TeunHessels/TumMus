const express = require('express')

const server = express()


server.all('/', (req, res) => {
  res.send('Hello World!')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Bot is ONLINE")
  })
}

module.exports = keepAlive