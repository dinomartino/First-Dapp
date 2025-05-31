let web3
let currentNum
let contract
let accounts
let account
// import { Web3 } from 'web3';
// let web3 = new Web3("https://sepolia.drpc.org");

const connectButton = document.getElementById("Connect")
const IncrementButton = document.getElementById("Increment")
const ShowButton = document.getElementById("ShowNumber")
const ContractNumber = document.getElementById("status")

const abi = [{
    "type": "function",
    "name": "increaseNumber",
    "inputs": [],
    "outputs": [],
    "stateMutability":
        "nonpayable"
},
{
    "type": "function",
    "name": "showNumber",
    "inputs": [], "outputs":
        [{
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
        }],
    "stateMutability": "view"
}]
const ContractAddress = "0x64186de481D2b2aDE41322b1a2115ad7a1d99A47"


async function checkConnection() {
    try {
        console.log('Here are the connection check:')
        console.log("Connected to node:", await web3.eth.net.isListening());
        console.log("Chain ID:", await web3.eth.getChainId());
        console.log("Latest block number:", await web3.eth.getBlockNumber());
    } catch (error) {
        console.error("Connection error:", error.message);
    }
}

async function connectWallet() {
    try {
        if (!window.ethereum) {
            throw new Error("MetaMask is not installed");
        }
        if (!window.Web3) {
            throw new Error("Web3.js library not loaded");
        }
        accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        web3 = new window.Web3(window.ethereum);
        const chainId = await web3.eth.getChainId();
        contract = new web3.eth.Contract(abi, ContractAddress);
        console.log("Contract initialized:", contract);
        await checkConnection();

        connectButton.textContent = `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`;
        IncrementButton.disabled = false;
        ShowButton.disabled = false;
    } catch (error) {
        console.error("Wallet connection error:", error.message);

        connectButton.textContent = "Connect Wallet";
        IncrementButton.disabled = true;
        ShowButton.disabled = true;
    }

}

async function ShowNumber() {
    try {
        if (!contract) {

            throw new Error("Wallet not connected");
        }
        currentNum = await contract.methods.showNumber().call();
        console.log("Current number:", currentNum);
        ContractNumber.innerText = `Current number is: ${currentNum}`
    } catch (error) {
        console.error("Error fetching number:", error.message);
    }

}

async function increaseNumber() {
    try {
        await contract.methods.increaseNumber().send({ from: accounts[0] })
    } catch (error) {
        console.error("Error incrementing number:", error.message);
    }
}

connectButton.onclick = connectWallet
ShowButton.onclick = ShowNumber
IncrementButton.onclick = increaseNumber

