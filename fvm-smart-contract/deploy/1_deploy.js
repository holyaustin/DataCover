require("hardhat-deploy")
require("hardhat-deploy-ethers")
const fs = require('fs');

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    
    //deploy ProviderInsurance
    const ProviderInsurance = await ethers.getContractFactory('ProviderInsurance', wallet);
    console.log('Deploying ProviderInsurance...');
    const sp = await ProviderInsurance.deploy("0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228");
    await sp.deployed()
    console.log('ProviderInsurance deployed to:', sp.address);

    //deploy DataInsurance
    const ProviderFactory = await ethers.getContractFactory('ProviderInsuranceFactory', wallet);
    console.log('Deploying ProviderInsuranceFactory...');
    const pf = await ProviderFactory.deploy("0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228");
    await pf.deployed()
    console.log('ProviderInsurance Factory deployed to:', pf.address);

    fs.writeFileSync('./configProvider.js', `
    export const ProviderInsuranceAddress = "${sp.address}\n"
    export const ProviderFactoryAddress = "${pf.address}"
    `)
}