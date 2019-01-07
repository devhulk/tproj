const functions = require("firebase-functions")
const express = require("express")

/* Express */
const user = express()
user.get("/users", (request, response) => {
  response.send("Hello from Express user service")
})
const energyAsset = express()
energyAsset.get("/energyAssets", (request, response) => {
  response.send("Here is your energy asset!")
})

const user_service = functions.https.onRequest(user)
const energy_service = functions.https.onRequest(energyAsset)

const delegate_service = functions.https.onRequest((request, response) => {
 if (!request.path) {
   request.url = `/${request.url}` // prepend '/' to keep query params if any
 }
 switch (request.url) {
  case '/users':
   return user(request,response) 
  case '/energyAssets':
   return energyAsset(request,response) 
  default:
   response.send(`Not a valid URL ${request.url}`);
 }

})


module.exports = {
  user_service,
  energy_service,
  delegate_service
}