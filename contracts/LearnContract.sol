// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LearnContract {
    string deployer = "Ali Murtaza"; // update to your name or anything you want.

    function getDeployer() external view returns (string memory) {
        return deployer;
    }
}
