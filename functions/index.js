const delegate = require('./routes/delegate.js')

module.exports = {
 users: delegate.user_service,
 energyAssets: delegate.energy_service,
 delegate: delegate.delegate_service
}