// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Increment} from "../src/increment.sol";
import {Script} from "forge-std/Script.sol";

contract DeployIncrement is Script {
    function run() public returns (Increment) {
        vm.startBroadcast();
        Increment increment = new Increment();
        vm.stopBroadcast;
        return increment;
    }
}
