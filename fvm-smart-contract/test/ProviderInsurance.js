const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('ProviderInsurance', function () {
    let ProviderInsurance;
    let owner;
    let user0;
    let user1;

    // Constants for premium and provider values
    const CATEGORY_A_PREMIUM = ethers.utils.parseEther('0.0001'); // 0.0001 ether
    const CATEGORY_B_PREMIUM = ethers.utils.parseEther('0.00001'); // 0.00001 ether
    const CATEGORY_A_COLLATERAL = ethers.utils.parseEther('2.5'); // 2.5 ether
    const CATEGORY_B_COLLATERAL = ethers.utils.parseEther('1.5'); // 1.5 ether

    beforeEach(async function () {
        [owner, user0, user1] = await ethers.getSigners();
        const ProviderInsurance = await ethers.getContractFactory('ProviderInsurance');
        providerInsurance = await ProviderInsurance.deploy(owner.address);
        await providerInsurance.deployed();
    });

    describe('Deployment', function () {
        it('Should set the correct verifierCompany', async function () {
            expect(await providerInsurance.verifierCompany()).to.equal(owner.address);
        });
    });

    describe('setProviderValue', function () {
        it('Should set provider value for a user', async function () {
            const userAddress = await user0.getAddress();
            const CATEGORY_A_COLLATERAL_BN = ethers.BigNumber.from(CATEGORY_A_COLLATERAL);
          
            await providerInsurance.connect(user0).setProviderValue(CATEGORY_A_COLLATERAL);
            const user = await providerInsurance.users(userAddress);
          
            expect(user.providerAmount).to.equal(CATEGORY_A_COLLATERAL_BN);
            expect(user.hasDropped).to.be.false;
            expect(user.isApproved).to.be.false;
            expect(user.lastPaymentTimestamp).to.equal(ethers.BigNumber.from(0));
        });
          

        it('Should not set provider value exceeding the limit', async function () {
            await expect(providerInsurance.connect(user0).setProviderValue(CATEGORY_A_COLLATERAL + 1)).to.be.revertedWith('Provider value exceeds the limit');
        });
        
    });

    describe('setProviderStatus', function () {
        beforeEach(async function () {
            await providerInsurance.connect(user0).setProviderValue(CATEGORY_A_COLLATERAL);
        });

        it('Should set provider status for a user', async function () {
            const userAddress = await user0.getAddress();
            const CATEGORY_A_COLLATERAL_BN = ethers.BigNumber.from(CATEGORY_A_COLLATERAL);
          
            await providerInsurance.connect(user0).setProviderValue(CATEGORY_A_COLLATERAL);
            await providerInsurance.connect(user0).setProviderStatus(true);
          
            const user = await providerInsurance.users(userAddress);
          
            expect(user.hasDropped).to.be.true;
            expect(user.isApproved).to.be.false;
          });          

        it('Should require provider value to be set', async function () {
            await expect(providerInsurance.connect(user1).setProviderStatus(true)).to.be.revertedWith('No provider value set');
        });
    });

    describe('payPremiumCategoryA', function () {
        beforeEach(async function () {
            await providerInsurance.connect(user0).setProviderValue(CATEGORY_A_COLLATERAL);
        });

        it('Should allow Category A user to pay premium', async function () {
            await expect(providerInsurance.connect(user0).payPremiumCategoryA({ value: CATEGORY_A_PREMIUM })).to.not.be.reverted;
        });

        it('Should not allow Category B user to pay premium', async function () {
            await expect(providerInsurance.connect(user0).payPremiumCategoryB({ value: CATEGORY_B_PREMIUM })).to.be.revertedWith('Provider value is within the limit for Category A');
        });

        it('Should not allow payment below the premium amount', async function () {
            await expect(providerInsurance.connect(user0).payPremiumCategoryA({value: CATEGORY_A_PREMIUM.sub(ethers.utils.parseEther('0.0001')) })).to.be.revertedWith('Incorrect premium amount');
        });          

        it('Should transfer premium amount to the verifierCompany', async function () {
            const initialBalance = await ethers.provider.getBalance(owner.address);
            await providerInsurance.connect(user0).payPremiumCategoryA({ value: CATEGORY_A_PREMIUM });
            const finalBalance = await ethers.provider.getBalance(owner.address);
            expect(finalBalance).to.equal(initialBalance.add(CATEGORY_A_PREMIUM));
        });       
    });

    describe('payPremiumCategoryB', function () {
        beforeEach(async function () {
            await providerInsurance.connect(user1).setProviderValue(CATEGORY_B_COLLATERAL);
        });

        it('Should allow Category B user to pay premium', async function () {
            await expect(providerInsurance.connect(user1).payPremiumCategoryB({ value: CATEGORY_B_PREMIUM })).to.not.be.reverted;
        });

        it('Should not allow payment below the premium amount', async function () {
            await expect(providerInsurance.connect(user1).payPremiumCategoryB({ value: CATEGORY_B_PREMIUM.sub(ethers.utils.parseEther('0.00001')) })).to.be.revertedWith('Incorrect premium amount');
        });    

        it('Should transfer premium amount to the verifierCompany', async function () {
            const initialBalance = await ethers.provider.getBalance(owner.address);
            await providerInsurance.connect(user1).payPremiumCategoryB({ value: CATEGORY_B_PREMIUM });
            const finalBalance = await ethers.provider.getBalance(owner.address);
            expect(finalBalance).to.equal(initialBalance.add(CATEGORY_B_PREMIUM));
        });        
    });
});
