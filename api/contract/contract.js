const { Web3 } = require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3(
  "https://crimson-dawn-patina.ethereum-sepolia.discover.quiknode.pro/47d071f4d9ceb04a91320d33bb735897a7691c20/"
);
const contractAddress = "0x047633B817f58E491D911E032239731408BC09C2";
const contract = new web3.eth.Contract(ABI, contractAddress);

module.exports = { contract };
