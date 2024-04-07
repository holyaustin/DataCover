/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from "react";
import { jsx, Box } from 'theme-ui';
import { useRouter } from 'next/router'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { Wallet, providers } from "ethers";

import ProviderInsuranceFactory from "../../artifacts/contracts/ProviderInsuranceFactory.sol/ProviderInsuranceFactory.json";
import { ProviderFactoryAddress } from "../../configProvider";

import ProviderInsurance from "../../artifacts/contracts/ProviderInsurance.sol/ProviderInsurance.json";
import { ProviderInsuranceAddress } from "../../configProvider";

const rpc = "https://api.calibration.node.glif.io/rpc/v1";

const SPInsurance = () => {
  const navigate = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState();
  const [imageView, setImageView] = useState();
  const [metaDataURL, setMetaDataURl] = useState();
  const [txURL, setTxURL] = useState();
  const [txStatus, setTxStatus] = useState();
  const [formInput, updateFormInput] = useState({ name: "" });


  const BuyCategoryA = async () => {
    try {
      setTxStatus("Adding transaction to Blockchain..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const connectedContract = new ethers.Contract(ProviderFactoryAddress, ProviderInsuranceFactory.abi, provider.getSigner());
      console.log("Connected to contract", ProviderFactoryAddress);

      const buyTx = await connectedContract.createProviderInsurance();
      console.log("File successfully created and added to Blockchain");
      await buyTx.wait();
      //return buyTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Blockchain.");
      console.log(error);
    }
  };

  const BuyCategoryB = async () => {
    try {
      setTxStatus("Adding transaction to Blockchain..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const connectedContract = new ethers.Contract(ProviderFactoryAddress, ProviderInsuranceFactory.abi, provider.getSigner());
      console.log("Connected to contract", ProviderFactoryAddress);

      const buyTx = await connectedContract.payPremiumCategoryB();
      console.log("File successfully created and added to Blockchain");
      await buyTx.wait();
      //return buyTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Blockchain.");
      console.log(error);
    }
  };

  
  return (
    <Box as="section"  sx={styles.section}>
      <div className="bg-purple-100 text-4xl text-center text-black font-bold pt-10">
        <h1> Buy Cover for Storage Providers (SP)</h1>
      </div>
      <div className="flex justify-center bg-purple-100">
        <div className="w-1/2 flex flex-col pb-12 ">

          <div className="bg-purple-100 text-2xl text-center text-black font-bold pt-2">
          <h2> Prices of Insurance cover are for Demo purpose. Actual prices shall be used in Production on Mainnet</h2>
          </div>
          <button type="button" onClick={BuyCategoryA} className="font-bold mt-5 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Buy Category A Premium  (0.01 FIL)
          </button>
          <button type="button" onClick={BuyCategoryB} className="font-bold mt-10 bg-blue-700 text-white text-2xl rounded p-4 shadow-lg">
            Buy Category B Premium (0.1 FIL)
          </button>
          <hr />

          <div className="bg-purple-100 text-2xl text-center text-black font-bold pt-2 mt-10">
            <h2> Claims</h2>
            </div>
          <button type="button" onClick={BuyCategoryB} className="font-bold mt-10 bg-black text-white text-2xl rounded p-4 shadow-lg">
            Submit your Claim 
          </button>
          <button type="button" onClick={BuyCategoryB} className="font-bold mt-10 bg-red-700 text-white text-2xl rounded p-4 shadow-lg">
            Cancel your Insurance 
          </button>
        </div>
      </div>
    </Box>

  );
};
export default SPInsurance;

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
};
