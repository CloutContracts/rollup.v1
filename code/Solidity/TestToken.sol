pragma solidity ^0.5.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

/**
 * @title TestToken is a basic ERC20 Token
 */
contract TestToken is ERC20, Ownable {
    /**
     * @dev assign totalSupply to account creating this contract */
    constructor() public {
    constructor() public ERC20("CloutContracts", "CCS"){
        _mint(msg.sender, 1110000000000000000000000);
    }
}
