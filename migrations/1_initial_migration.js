const Migrations = artifacts.require("./Migrations.sol");
// const KlaytnGreeter = artifacts.require("./Count.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(KlaytnGreeter);
};