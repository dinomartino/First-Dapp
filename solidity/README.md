## Smart Contract Details

- **Contract Name**: Increment
- **Address**: `0x64186de481D2b2aDE41322b1a2115ad7a1d99A47`
- **Network**: Sepolia testnet
- **Source Code**: `solidity/src/Increment.sol`
- **Functions**:
  - `showNumber()`: Returns the current counter value (view function).
  - `increaseNumber()`: Increments the counter (non-payable function).
- **Tests**: `solidity/test/incrementTest.sol` includes unit tests to verify:
  - Initial counter value is 0 (`testShowNumber`).
  - Counter increments correctly (`testIncreseNumber`).
- **Deployment**: Deployed using a Foundry script (`script/DeployIncrement.s.sol`), with details in `broadcast/DeployIncrement.s.sol/run-latest.json`.