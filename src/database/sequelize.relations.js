const Wallet = require('../models/wallet.model');
const Service = require('../models/service.model');
const Owncheck = require('../models/owncheck.model');
const Check = require('../models/check.model');

Check.belongsTo(Wallet, { foreignKey: 'id_wallet'});
Check.belongsTo(Service, { foreignKey: 'id_service'});
Check.belongsTo(Owncheck, { foreignKey: 'id_owncheck'});