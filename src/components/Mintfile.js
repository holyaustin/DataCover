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

      const buyTx = await connectedContract.selectPackage(2);
      console.log("File successfully created and added to Blockchain");
      await buyTx.wait();
      //return buyTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Blockchain.");
      console.log(error);
    }
  };


  
  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    console.log("urlArray = ", urlArray);
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    console.log("ipfsGateWayURL = ", ipfsGateWayURL)
    return ipfsGateWayURL;
  };

  return (
    <Box as="section"  sx={styles.section}>
      <div className="bg-purple-100 text-4xl text-center text-black font-bold pt-10">
        <h1> Buy Cover for Data Owners</h1>
      </div>
      <div className="flex justify-center bg-purple-100">
        <div className="w-1/2 flex flex-col pb-12 ">

          <div className="bg-purple-100 text-2xl text-center text-black font-bold pt-2">
        <h2> Prices of Insurance cover are for Demo purpose. Actual prices shall be used in Production on Mainnet</h2>
      </div>
          <button type="button" onClick={BuyRegular} className="font-bold mt-5 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Buy Regular (0.02 FIL)
          </button>
          <button type="button" onClick={BuyRobust} className="font-bold mt-10 bg-blue-700 text-white text-2xl rounded p-4 shadow-lg">
            Buy Robust (0.05 FIL)
          </button>
          <button type="button" onClick={BuyComprehensive} className="font-bold mt-10 bg-red-700 text-white text-2xl rounded p-4 shadow-lg">
            Buy Comprehensive (0.1 FIL)
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
