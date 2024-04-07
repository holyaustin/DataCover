/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from "react";
import { jsx, Box } from 'theme-ui';
import { NFTStorage } from "nft.storage";
import { useRouter } from 'next/router'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from 'axios'
import { rgba } from 'polished';
import { Wallet, providers } from "ethers";

import 'dotenv/config';
import DataInsurance from "../../artifacts/contracts/DataInsurance.sol/DataInsurance.json";

import { DataInsuranceAddress } from "../../configData";
// const APIKEY = [process.env.NFT_STORAGE_API_KEY];
const rpc = "https://api.calibration.node.glif.io/rpc/v1";

const MintFile = () => {
  const navigate = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState();
  const [imageView, setImageView] = useState();
  const [metaDataURL, setMetaDataURl] = useState();
  const [txURL, setTxURL] = useState();
  const [txStatus, setTxStatus] = useState();
  const [formInput, updateFormInput] = useState({ name: "" });


  const BuyRegular = async () => {
    try {
      setTxStatus("Adding transaction to Blockchain..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const connectedContract = new ethers.Contract(DataInsuranceAddress, DataInsurance.abi, provider.getSigner());
      console.log("Connected to contract", DataInsuranceAddress);

      const buyTx = await connectedContract.selectPackage(0);
      console.log("File successfully created and added to Blockchain");
      await buyTx.wait();
      //return buyTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Blockchain.");
      console.log(error);
    }
  };

  const BuyRobust = async () => {
    try {
      setTxStatus("Adding transaction to Blockchain..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const connectedContract = new ethers.Contract(DataInsuranceAddress, DataInsurance.abi, provider.getSigner());
      console.log("Connected to contract", DataInsuranceAddress);

      const buyTx = await connectedContract.selectPackage(1);
      console.log("File successfully created and added to Blockchain");
      await buyTx.wait();
      //return buyTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Blockchain.");
      console.log(error);
    }
  };

  const BuyComprehensive = async () => {
    try {
      setTxStatus("Adding transaction to Blockchain..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const connectedContract = new ethers.Contract(DataInsuranceAddress, DataInsurance.abi, provider.getSigner());
      console.log("Connected to contract", DataInsuranceAddress);

      //const buyTx = await connectedContract.selectPackage(2);
      console.log("Frontend interacting with the  Blockchain");
      //await buyTx.wait();

      const gasEstimated = await connectedContract.estimateGas.selectPackage(2);
      console.log("Gas estimate is", gasEstimated)
      const buyTx = await connectedContract.estimateGas.selectPackage(2, {
      gasLimit: Math.ceil(gasMargin(gasEstimated, 1.1)) 
      });
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
        <h1> House Keeping Task</h1>
      </div>
      <div className="flex justify-center bg-purple-100">
        <div className="w-1/2 flex flex-col pb-12 ">

          <div className="bg-purple-100 text-2xl text-center text-black font-bold pt-2">
        <h2> For Data Owners</h2>
      </div>
          <button type="button" onClick={BuyRegular} className="font-bold mt-5 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Get all Insurance Cover
          </button>
          <button type="button" onClick={BuyRobust} className="font-bold mt-10 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Approve Claim
          </button>
          <button type="button" onClick={BuyComprehensive} className="font-bold mt-10 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Reject Claim
          </button>

          <div className="bg-purple-100 text-2xl text-center text-black font-bold pt-2 mt-10">
            <h2> For Storage Providers</h2>
            </div>
          <button type="button" onClick={BuyComprehensive} className="font-bold mt-10 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Set Provider Value 
          </button>
          <button type="button" onClick={BuyComprehensive} className="font-bold mt-10 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Set Provider Status 
          </button>
          <button type="button" onClick={BuyComprehensive} className="font-bold mt-10 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Approve Provider
          </button>
        </div>
      </div>
    </Box>

  );
};
export default MintFile;

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
};
