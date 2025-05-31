# First DApp: Counter on Sepolia

A decentralized application (DApp) built to interact with a counter smart contract deployed on the Ethereum Sepolia testnet. This project demonstrates Web3 development skills, integrating a front-end interface with a Solidity smart contract using Web3.js and MetaMask. Developed as part of my journey to become a Web3 full-stack developer.


## Features

- **Connect to MetaMask**: Securely connect your wallet to interact with the Sepolia testnet.
- **View Counter Value**: Display the current number stored in the smart contract.
- **Increment Counter**: Send a transaction to increase the counter value.
- **Responsive UI**: Simple, user-friendly interface built with HTML and JavaScript.
- **Smart Contract**: `Increment.sol` deployed at `0x64186de481D2b2aDE41322b1a2115ad7a1d99A47`.

## Tech Stack

- **Front-End**: HTML, JavaScript, Web3.js (v4.16.0)
- **Smart Contract**: Solidity, deployed using Foundry
- **Package Manager**: pnpm
- **Blockchain**: Ethereum Sepolia testnet
- **Tools**: VS Code, MetaMask, Foundry

## Prerequisites

To run this DApp locally, ensure you have:

- [MetaMask](https://metamask.io/) installed and configured for the Sepolia testnet.
- Sepolia test ETH (get from a [Sepolia faucet](https://sepolia-faucet.com/)).
- [Node.js](https://nodejs.org/) (v16 or higher) and [pnpm](https://pnpm.io/) (`npm install -g pnpm`).
- A live server extension in VS Code (e.g., Live Server) or a local server tool (`npm install -g live-server`).

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dinomartino/First-Dapp.git
   cd First-Dapp
   ```

2. **Install Dependencies**:
   ```bash
   cd public
   pnpm install
   ```

3. **Run the DApp**:
   - Start a local server:
     ```bash
     live-server public
     ```
   - Or use VS Code’s Live Server extension to open `public/index.html`.

4. **Connect MetaMask**:
   - Open the DApp in your browser (e.g., `http://localhost:5500/public`).
   - Switch MetaMask to the Sepolia testnet.
   - Click "Connect Wallet" to link your MetaMask account.

5. **Interact with the DApp**:
   - Click "Show Number" to view the current counter value.
   - Click "Increase Number" to send a transaction and increment the counter.

## Project Structure

```
First-Dapp/
├── .gitignore
├── public/
│   ├── app.js          # Front-end JavaScript with Web3.js
│   ├── index.html      # DApp interface
│   ├── package.json    # Front-end dependencies
│   ├── pnpm-lock.yaml  # pnpm lock file
├── solidity/
│   ├── src/
│   │   └── Increment.sol  # Counter smart contract
│   ├── broadcast/
│   │   └── DeployIncrement.s.sol/
│   │       └── run-latest.json  # Foundry deployment log
├── README.md           # Project documentation
```

## Future Improvements

- Add a React.js front-end for a dynamic UI.
- Implement contract events to notify users of counter increments.
- Add unit tests for `Increment.sol` using Foundry.
- Deploy the DApp to Vercel or Netlify for public access.
- Verify the contract on Sepolia Etherscan.

## About the Developer

Hi, I'm [Tino](https://github.com/dinomartino), an aspiring Web3 full-stack developer learning through Cyfrin Updraft. This project is part of my journey to master Solidity, Web3.js, and decentralized app development. This README is created with the help of AI by the way. Hope one day i can really be a web3 developer hahahaahaha

## License

MIT License - Feel free to use, modify, and distribute this project.

