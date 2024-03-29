const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("ProviderInsuranceFactory", () => {
    let ProviderInsuranceFactory;
    let ProviderInsurance;
    let providerInsuranceFactory;
    let verifierCompany;
    let owner;
    let addr1;
    let addr2;
  
    before(async () => {
      // Get signers from the hardhat local blockchain node
      [owner, addr1, addr2] = await ethers.getSigners();
  
      // Compile the contracts and get the ContractFactories
      ProviderInsuranceFactory = await ethers.getContractFactory("ProviderInsuranceFactory");
      ProviderInsurance = await ethers.getContractFactory("ProviderInsurance");
  
      // Deploy the ProviderInsuranceFactory contract with the verifier company address
      verifierCompany = owner.address;
      providerInsuranceFactory = await ProviderInsuranceFactory.deploy(verifierCompany);
      await providerInsuranceFactory.deployed();
    });
  
    it("should create a new provider insurance contract", async () => {
      await providerInsuranceFactory.createProviderInsurance();
  
      const contractAddress = await providerInsuranceFactory.getProviderContractByOwner(owner.address);
      expect(contractAddress).to.not.be.null;
    });
  
    it("should return the correct provider insurance contract for an owner", async () => {
      const contractAddress1 = await providerInsuranceFactory.getProviderContractByOwner(owner.address);
      const contractAddress2 = await providerInsuranceFactory.getProviderContractByOwner(addr1.address);
  
      expect(contractAddress1).to.not.equal(contractAddress2);
    });
  
    it("should return the list of deployed provider insurance contracts", async () => {
        // deploy a new instance for another user so as to add to the list
      await providerInsuranceFactory.connect(addr2).createProviderInsurance();
  
      const deployedContracts = await providerInsuranceFactory.getDeployedProviderContract();
  
      expect(deployedContracts).to.have.lengthOf(2);
    });
  
    it("should not allow creating multiple contracts for the same address", async () => {
      await expect(providerInsuranceFactory.createProviderInsurance()).to.be.revertedWith(
        "Contract already exists for this address"
      );
    });
  });