const PlanetPay = artifacts.require("PlanetPayH");

module.exports = function (deployer) {
  deployer.deploy(PlanetPay);
};

