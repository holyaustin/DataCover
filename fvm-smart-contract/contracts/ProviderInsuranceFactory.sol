// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title ProviderInsuranceFactory Smart Contract
 * @author @holyaustin (Augustine Onuora)
 * @notice The contract ProviderInsuranceFactory.sol is a factory contract that enables each user to create their own instance 
 * of the ProviderInsurance contract and this keeps track of corresponding owners for each instance of the contract they deploy.
 */

import "./ProviderInsurance.sol";

contract ProviderInsuranceFactory {
    address[] public deployedContracts; // Stores the addresses of all deployed ProviderInsurance contracts
    address payable public verifierCompany; // Address of the verifier company
    mapping(address => address) public providerContractOwners; // Maps user addresses to their corresponding ProviderInsurance contract addresses
    mapping(address => bool) public hasContract; // Tracks whether a user has deployed a ProviderInsurance contract

    constructor(address payable _verifierCompany) {
        verifierCompany = _verifierCompany;
    }

    // Function to create a new instance of the ProviderInsurance contract for the caller
    function createProviderInsurance() external {
        require(
            !hasContract[msg.sender],
            "Contract already exists for this address"
        );

        // Deploy a new instance of the ProviderInsurance contract
        ProviderInsurance newProviderContract = new ProviderInsurance(verifierCompany);
        
        // Store the address of the deployed contract
        deployedContracts.push(address(newProviderContract));

        // Map the caller's address to the contract address
        providerContractOwners[msg.sender] = address(newProviderContract);

        // Update contract deployment status for the caller
        hasContract[msg.sender] = true;
    }

    // Function to get the ProviderInsurance contract address associated with a specific owner
    function getProviderContractByOwner(address walletAddress) external view returns (address) {
        return providerContractOwners[walletAddress];
    }

    // Function to get all deployed ProviderInsurance contract addresses
    function getDeployedProviderContract() external view returns (address[] memory) {
        return deployedContracts;
    }
}
