const express = require("express")
const user = express()

user.get("/users", (request, response) => {
  response.send("Hello from Express user service")
})

module.exports = user