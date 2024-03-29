// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title DataCover Smart Contract
 * @author @holyaustin (Augustine Onuora)
 * @notice This smart contract implements an insurance cover that offers users up to 2 varieties of insurance 
 * policies to Filecoin Storages Provider (SP) in a ProviderInsurance.sol smart contract. Users can choose one of the 2 packages namely CATEGORY_A_PREMIUM and 
 * CATEGORY_B_PREMIUM. The packages require users to pay an insurance amount of 100000wei and 10000wei respectively, every 
 * 28 days. The contract also recognizes an admin (the insurance company) to whose address all insurance amounts are paid. 
 * This admin gets to approve that a user who opted for CATEGORY_A_PREMIUM is able to claim up to 3 ether worth of loan 
 * provider value, while a user who opted for CATEGORY_B_PREMIUM is able to claim up to 2 ether worth of loan provider value. The prerequisite to claiming the funds is yet an approval by the insurance company who would verify that there was a drop in provider value. The admin may approve or decline user claims.
 */

contract ProviderInsurance {
    address payable public verifierCompany;
    uint256 public constant CATEGORY_A_PREMIUM = 100000 wei;
    uint256 public constant CATEGORY_B_PREMIUM = 10000 wei;
    uint256 public constant PAYMENT_INTERVAL = 28 days;
    uint256 public constant CATEGORY_A_MAX_PROVIDER = 3 ether;
    uint256 public constant CATEGORY_B_MAX_PROVIDER = 2 ether;

    struct User {
        uint256 providerAmount;
        bool hasDropped;
        bool isApproved;
        uint256 lastPaymentTimestamp;
    }

    mapping(address => User) public users;

    constructor(address payable _verifierCompany) {
        verifierCompany = _verifierCompany;
    }

    modifier onlyAdmin() {
        require(msg.sender == verifierCompany, "Only the contract verifier can call this function");
        _;
    }

    // Function to allow users to set their provider value
    function setProviderValue(uint256 _providerAmount) external payable {
        require(_providerAmount <= getCategoryMaxProvider(), "Provider value exceeds the limit");
        users[msg.sender].providerAmount = _providerAmount;
    }

    // Function to allow users to set whether provider value has dropped
    function setProviderStatus(bool hasDropped) external payable {
        require(users[msg.sender].providerAmount > 0, "No provider value set");
        users[msg.sender].hasDropped = hasDropped;
        users[msg.sender].isApproved = false;
    }


    // Function for Category A users to pay the premium every 28 days
    function payPremiumCategoryA() external payable {
        require(users[msg.sender].providerAmount > 0, "No provider value set");
        require(users[msg.sender].providerAmount <= CATEGORY_A_MAX_PROVIDER, "Provider value exceeds the limit for Category A");
        require(msg.value >= CATEGORY_A_PREMIUM, "Incorrect premium amount");

        if (users[msg.sender].lastPaymentTimestamp == 0) {
            users[msg.sender].lastPaymentTimestamp = block.timestamp;
        } else {
            require(block.timestamp >= users[msg.sender].lastPaymentTimestamp + PAYMENT_INTERVAL, "Payment interval not reached");
            users[msg.sender].lastPaymentTimestamp = block.timestamp;
        }

        verifierCompany.transfer(msg.value); // Transfer the premium amount to the verifier company
    }

    // Function for Category B users to pay the premium every 28 days
    function payPremiumCategoryB() external payable {
        require(users[msg.sender].providerAmount > 0, "No provider value set");
        require(users[msg.sender].providerAmount <= CATEGORY_B_MAX_PROVIDER, "Provider value is within the limit for Category A");

        require(msg.value >= CATEGORY_B_PREMIUM, "Incorrect premium amount");

        if (users[msg.sender].lastPaymentTimestamp == 0) {
            users[msg.sender].lastPaymentTimestamp = block.timestamp;
        } else {
            require(block.timestamp >= users[msg.sender].lastPaymentTimestamp + PAYMENT_INTERVAL, "Payment interval not reached");
            users[msg.sender].lastPaymentTimestamp = block.timestamp;
        }

        verifierCompany.transfer(msg.value); // Transfer the premium amount to the verifier company
    }

    // Function for the contract owner to approve or decline a user's provider value
    function approveProvider(address userAddress, bool isApproved) external onlyAdmin {
        require(users[userAddress].providerAmount > 0, "No provider value set");

        users[userAddress].isApproved = isApproved;

        if (isApproved) {
            verifierCompany.transfer(users[userAddress].providerAmount); // Transfer the provider amount to the user
        }
    }

    // Function to get the maximum provider value allowed for the user's category
    function getCategoryMaxProvider() private view returns (uint256) {
        if (users[msg.sender].providerAmount == 0) {
            return CATEGORY_A_MAX_PROVIDER; // Default to Category A for users who have not set their provider value yet
        }
        if (users[msg.sender].providerAmount <= CATEGORY_A_MAX_PROVIDER) {
            return CATEGORY_A_MAX_PROVIDER;
        } else {
            return CATEGORY_B_MAX_PROVIDER;
        }
    }
}
