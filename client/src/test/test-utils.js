const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const dirtyChai = require('dirty-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(dirtyChai);

module.exports = { chai };
