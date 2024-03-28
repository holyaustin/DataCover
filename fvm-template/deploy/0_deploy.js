require("hardhat-deploy")
require("hardhat-deploy-ethers")
const fs = require('fs');

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    
    //deploy DataInsurance
    const Data = await ethers.getContractFactory('DataInsurance', wallet);
    console.log('Deploying DataInsurance...');
    const dc = await Data.deploy("0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228");
    await dc.deployed()
    console.log('DataInsurance deployed to:', dc.address);

    //deploy DataInsurance
    const DataFactory = await ethers.getContractFactory('DataInsuranceFactory', wallet);
    console.log('Deploying DataInsuranceFactory...');
    const df = await DataFactory.deploy("0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228");
    await df.deployed()
    console.log('Data Factory deployed to:', df.address);

    fs.writeFileSync('./configData.js', `
    export const DataInsuranceAddress = "${dc.address}\n"
    export const DataFactoryAddress = "${df.address}"
    `)
}