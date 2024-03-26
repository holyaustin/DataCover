// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title DataInsuranceFactory Smart Contract
 * @author @holyaustin (Augustine Onuora)
 * @notice The contract DataInsuranceFactory.sol is a factory contract that enables each user to create their own instance 
 * of the DataInsurance contract and this keeps track of corresponding owners for each instance of the contract they deploy.
 */

import "./DataInsurance.sol";

contract DataInsuranceFactory {
    address payable public verifierCompany; // Address of the verifier company
    address[] public deployedContracts; // Stores the addresses of all deployed DataInsurance contracts
    mapping(address => address) public contractOwners; // Maps user addresses to their corresponding DataInsurance contract addresses
    mapping(address => bool) public hasContract; // Tracks whether a user has deployed a DataInsurance contract

    constructor(address payable _verifierCompany) {
        verifierCompany = _verifierCompany;
    }

    // Function to create a new instance of the DataInsurance contract for the caller
    function createDataInsuranceContract() external {
        require(
            !hasContract[msg.sender],
            "Contract already exists for this address"
        );

        DataInsurance newContract = new DataInsurance(verifierCompany);
        deployedContracts.push(address(newContract));
        contractOwners[msg.sender] = address(newContract);
        hasContract[msg.sender] = true;
    }

    // Function to get the DataInsurance contract address associated with a specific owner
    function getContractByOwner(address walletAddress) external view returns (address) {
        return contractOwners[walletAddress];
    }

    // Function to get all deployed DataInsurance contract addresses
    function getDeployedContracts() external view returns (address[] memory) {
        return deployedContracts;
    }
}
