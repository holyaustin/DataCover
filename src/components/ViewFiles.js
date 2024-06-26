/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { jsx, Box } from 'theme-ui';
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from 'next/router'
import Web3Modal from "web3modal";
import { rgba } from 'polished';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import DataInsuranceFactory from "../../artifacts/contracts/DataInsuranceFactory.sol/DataInsuranceFactory.json";

import { DataFactoryAddress } from "../../configData";

export default function ViewFiles() {
  const navigate = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const rpcUrl = "https://rpc.ankr.com/filecoin_testnet";


  useEffect(() => {
    loadDataCover();
  }, []);

  async function loadDataCover() {

    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })


  } 

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  
  async function createFactory() {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    console.log("item id clicked is createFactor",);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DataFactoryAddress, DataInsuranceFactory.abi, signer);

    const transaction = await contract.getContractByOwner(signer);
 
    await transaction.wait();
    console.log("DataInsuranceFactory Share transaction completed ");
    loadDataCover();
    //navigate("/view", { state: token });
}


  if (loadingState === "loaded" && !nfts.length) {
    return (
      <div sx={styles.section}>
        <h1 className="px-20 py-10 text-3xl text-white">Empty Insurance, no data cover yet</h1>
      </div>
    );
  }
  return (
    <Box as="section"  sx={styles.section}>
      <div className="bg-purple-100 text-4xl text-center text-black font-bold pt-10">
        <h1> My Data Cover</h1>
      </div>
    <div className="flex justify-center bg-purple-100 mb-12">

      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4">
          { 

            <div  className="shadow rounded-xl overflow-hidden border-2 border-white-500">
              <iframe
                title="DataInsuranceFactory"
                height="auto"
                width="100%"
                objectfit="cover"
                src={"${nft.image}#toolbar=0&embedded=true"}
                className="py-3 object-cover h-500"
              />
              <div className="p-1">
                <p style={{ height: "34px" }} className="text-xl text-purple-700 font-semibold">Name: {"Data Cover"}</p>
                <p className="text-xl font-bold text-black">Public : {"Robust Premium payment "}</p>
              </div>
              {/** onClick={() => createFactory} */}
              <div className="p-2 bg-black">
              <Popup trigger={<button type="button" className="w-full bg-purple-700 text-white font-bold py-2 px-2 rounded" >View Link</button>} 
                  position="bottom center">
                <div className=" bg-purple-200 text-black font-bold py-2 px-2 rounded">{"Data Cover Link"}</div>
                <button onClick={() => copyToClipBoard(["Data Cover Link"])}>Copy Link</button>
                
                 {copySuccess}
                </Popup>

                
              </div>
            </div>
          }
        </div>
      </div>

    </div>
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
 };
