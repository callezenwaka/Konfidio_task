// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

// import "hardhat/console.sol";

/** @title Blockchain. */
contract Blockchain {
  address payable private owner;
  uint[] public balances;
  uint[3][] public transactions;
  uint public blocksize;

  /** @dev check for user account.
    * @param _address user address.
    */
  modifier isAccount(address _address) {
    require(_address != address(0), "Unauthorised Access");
    _;
  }

  /** @dev check for contract owner.
    */
  modifier onlyOwner {
    require(msg.sender == owner, "Unauthorised.");
    _;
  }

  constructor() {
    owner = payable(msg.sender);
  }

  /** @dev Initialize accounts.
    * @param _balances account uint[].
    * @param _transactions account uint[][].
    * @param _blocksize block uint.
    */
  function init(uint[] memory _balances, uint[3][] memory _transactions, uint _blocksize) public isAccount(msg.sender) returns (bool) {
    balances = _balances;
    blocksize = _blocksize;
    for (uint i = 0; i < _transactions.length; i++) {
      if (balances[_transactions[i][0]] < _transactions[i][2]) {
        continue;
      }
      balances[_transactions[i][0]] -= _transactions[i][2];
      balances[_transactions[i][1]] += _transactions[i][2];
      transactions.push(_transactions[i]);
      // balances.push(_balances[i]);
    }

    return true;
  }

  /** @dev Get account balance.
    * @param index account uint.
    * @return balance account uint
    */
  function getAccountBalances(uint index) public view isAccount(msg.sender) returns (uint) {
    return balances[index];
  }

  /** @dev kill smart contract if something bad happens.
    */
  function kill() public payable onlyOwner {
    selfdestruct(owner);
  }
}
