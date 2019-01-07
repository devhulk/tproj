const express = require("express")
const cors = require("cors")

const energyAsset = express()
energyAsset.use(cors({ origin: true }))

energyAsset.get("/energyAssets", (request, response) => {
  response.send('GET energyAssets')
})

energyAsset.post("/energyAssets", (request, response) => {
  response.send(request.body)
})

module.exports = energyAsset