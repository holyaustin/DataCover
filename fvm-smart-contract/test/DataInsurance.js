const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('DataInsurance', function () {
  let dataInsurance;
  let verifierCompany;
  let user1;
  let user2;

  beforeEach(async function () {
    const DataInsurance = await ethers.getContractFactory('DataInsurance');
    [verifierCompany, user1, user2] = await ethers.getSigners();

    dataInsurance = await DataInsurance.deploy(verifierCompany.address);
    await dataInsurance.deployed();
  });

  it('should allow users to select an insurance package and pay premium', async function () {
    const insurancePackage = 1; // Robust package
    const premiumAmount = 10000; // Robust premium amount

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: premiumAmount,
    });

    const user1Data = await dataInsurance.users(user1.address);
    expect(user1Data.package).to.equal(insurancePackage);
    expect(user1Data.premiumAmount).to.equal(premiumAmount);
    expect(user1Data.isActive).to.equal(true);
  });

  it('should reject selecting an invalid insurance package', async function () {
    const invalidPackage = 4;

    await expect(
      dataInsurance.connect(user1).selectPackage(invalidPackage, {
        value: 1000,
      })
    ).to.be.reverted;
  });

  it('should reject selecting an insurance package for an already active user', async function () {
    const insurancePackage = 0; // Regular package

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: 1000,
    });

    await expect(
      dataInsurance.connect(user1).selectPackage(insurancePackage, {
        value: 1000,
      })
    ).to.be.revertedWith('User already has an active insurance package.');
  });

  it('should allow users to submit a claim and admin to approve it', async function () {
    const insurancePackage = 1; // Robust package
    const premiumAmount = 10000; // Robust premium amount

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: premiumAmount,
    });

    await dataInsurance.connect(user1).submitClaim();

    const claimStatusBefore = await dataInsurance.claims(user1.address);
    expect(claimStatusBefore).to.equal(0); // Claim status: Pending

    await dataInsurance.connect(verifierCompany).approveClaim(user1.address);

    const claimStatusAfter = await dataInsurance.claims(user1.address);
    expect(claimStatusAfter).to.equal(1); // Claim status: Approved
  });

  it('should reject approving a claim for an inactive user', async function () {
    await expect(
      dataInsurance.connect(verifierCompany).approveClaim(user1.address)
    ).to.be.revertedWith('User does not have an active insurance package.');
  });

  it('should reject approving a claim that is not pending', async function () {
    const insurancePackage = 1; // Robust package
    const premiumAmount = 10000; // Robust premium amount

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: premiumAmount,
    });

    await dataInsurance.connect(user1).submitClaim();

    await dataInsurance.connect(verifierCompany).approveClaim(user1.address);

    await expect(
      dataInsurance.connect(verifierCompany).approveClaim(user1.address)
    ).to.be.revertedWith('No pending claim for this user.');
  });

  it('should reject rejecting a claim for an inactive user', async function () {
    await expect(
      dataInsurance.connect(verifierCompany).rejectClaim(user1.address)
    ).to.be.revertedWith('User does not have an active insurance package.');
  });

  it('should reject rejecting a claim that is not pending', async function () {
    const insurancePackage = 1; // Robust package
    const premiumAmount = 10000; // Robust premium amount

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: premiumAmount,
    });

    await dataInsurance.connect(user1).submitClaim();

    await dataInsurance.connect(verifierCompany).approveClaim(user1.address);

    await expect(
      dataInsurance.connect(verifierCompany).rejectClaim(user1.address)
    ).to.be.revertedWith('No pending claim for this user.');
  });

  it('should allow users to cancel their insurance', async function () {
    const insurancePackage = 0; // Regular package
    const premiumAmount = 1000; // Regular premium amount

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: premiumAmount,
    });

    await dataInsurance.connect(user1).cancelInsurance();

    const user1Data = await dataInsurance.users(user1.address);
    expect(user1Data.isActive).to.equal(false);
  });

  it('should reject canceling insurance for an inactive user', async function () {
    await expect(
      dataInsurance.connect(user1).cancelInsurance()
    ).to.be.revertedWith('User does not have an active insurance package.');
  });

  it('should allow users to pay their premium', async function () {
    const insurancePackage = 0; // Regular package
    const premiumAmount = ethers.BigNumber.from("10000"); // Regular premium amount
    const premiumAmountWei = BigInt(premiumAmount);

    await dataInsurance.connect(user1).selectPackage(insurancePackage, {
      value: premiumAmountWei,
    });

    const paymentInterval = 28 * 24 * 60 * 60; // 28 days in seconds
    const elapsedTime = paymentInterval + 1; // Simulate time passing

    await ethers.provider.send('evm_increaseTime', [elapsedTime]);
    await ethers.provider.send('evm_mine');

    await dataInsurance.connect(user1).payPremiumToVerifier({
      value: premiumAmount,
    });

    const user1Data = await dataInsurance.users(user1.address);
    expect(user1Data.totalPayments).to.equal(2);
  });  
});
