const functions = require("firebase-functions")
const user = require('./users.js')
const energyAsset = require('./energyAssets.js')

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

const user_service = functions.https.onRequest(user)
const energy_service = functions.https.onRequest(energyAsset)

module.exports = {
  user_service,
  energy_service,
  delegate_service
}