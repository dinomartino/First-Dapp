// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {DeployIncrement} from "../script/deployIncrement.s.sol";
import {Increment} from "../src/increment.sol";

contract incrementTest is Test {
    Increment increment;

    function setUp() public {
        DeployIncrement deployer = new DeployIncrement();
        increment = deployer.run();
    }

    function testShowNumber() public view {
        assert(increment.showNumber() == 0);
    }

    function testIncreseNumber() public {
        assert(increment.showNumber() == 0);
        increment.increaseNumber();
        assert(increment.showNumber() == 1);
    }
}
