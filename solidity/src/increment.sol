// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Increment {
    uint256 private s_number = 0;

    function increaseNumber() public {
        s_number++;
    }

    function showNumber() public view returns (uint256) {
        return s_number;
    }
}
