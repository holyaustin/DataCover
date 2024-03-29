const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("DataInsuranceFactory", function () {
  let dataInsuranceFactory;
  let verifierCompany;
  let owner;
  let signer2;
  let signer3;
  let contractAddress;

  before(async function () {
    [owner, signer2, signer3] = await ethers.getSigners();

    const DataInsuranceFactory = await ethers.getContractFactory("DataInsuranceFactory");
    dataInsuranceFactory = await DataInsuranceFactory.deploy(owner.address);

    await dataInsuranceFactory.deployed();
    verifierCompany = owner.address;
  });

  it("should create a new insurance contract", async function () {
    await dataInsuranceFactory.createInsuranceContract();

    contractAddress = await dataInsuranceFactory.getContractByOwner(owner.address);
    const contract = await ethers.getContractAt("DataInsurance", contractAddress);

    expect(contract).to.exist;
    expect(await contract.verifierCompany()).to.equal(verifierCompany);
  });

  it("should return the correct contract address for an owner", async function () {
    const retrievedContractAddress = await dataInsuranceFactory.getContractByOwner(
      owner.address
    );

    expect(retrievedContractAddress).to.equal(contractAddress);
  });

  it("should return the list of deployed contracts", async function () {
    const deployedContracts = await dataInsuranceFactory.getDeployedContracts();

    expect(deployedContracts).to.deep.equal([contractAddress]);
  });

  it("should add a new user's contract to the list of deployed contracts", async function () {
  
    await dataInsuranceFactory.connect(signer3).createInsuranceContract();
  
    const deployedContracts = await dataInsuranceFactory.getDeployedContracts();
  
    expect(deployedContracts).to.have.lengthOf(2);
    expect(deployedContracts).to.include(contractAddress);
  
    const newContractAddress = await dataInsuranceFactory.getContractByOwner(signer3.address);
    expect(deployedContracts).to.include(newContractAddress);
  });
  
});
