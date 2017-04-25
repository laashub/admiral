'use strict';

module.exports = systemMachineImageRoutes;
var validateAccount = require('../../common/auth/validateAccount.js');

function systemMachineImageRoutes(app) {
  app.get('/api/systemMachineImages', validateAccount, require('./get.js'));
  app.put('/api/systemMachineImages/:systemMachineImageId', validateAccount,
    require('./put.js'));
}