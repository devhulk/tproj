const express = require("express")
const energyAsset = express()

energyAsset.get("/energyAssets", (request, response) => {
  response.send("Here is your energy asset!")
})

module.exports = energyAsset