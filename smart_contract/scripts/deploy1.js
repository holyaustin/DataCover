const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const FileNFT = await hre.ethers.getContractFactory("DataInsurance");
  const fileShare = await FileNFT.deploy("0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228");
  await fileShare.deployed();
  console.log("fileShare Contract deployed to:", fileShare.address);

  fs.writeFileSync('./config.js', `
  export const fileShareAddress = "${fileShare.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
