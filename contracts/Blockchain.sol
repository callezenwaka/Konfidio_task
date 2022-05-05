// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;
// pragma solidity 0.8.4;

// import "hardhat/console.sol";

/** @title Blockchain. */
contract Blockchain {
  // storage variables
  address payable private owner;
  uint256[] public balances;
  uint256[3][] public transactions;
  uint256 public blocksize;

  // /** @dev check for admin account.
  //     * @param _address user address.
  //     */
  // modifier isValid(address _address) {
  //     require(accounts[_address].affiliate != address(0), "Unauthorised Access");
  //     require(accounts[_address].affiliate != msg.sender, "Unauthorised admin");
  //     _;
  // }

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
    // init([100, 100, 500], [[0, 1, 50], [1, 2, 80], [2, 0, 450]], 2)
    // init([100, 100, 500], [[0, 1, 50], [1, 2, 800], [2, 0, 450], [1, 2, 80], [2, 0, 450]], 2)
    // init([100, 100, 500], [[0, 1, 50], [1, 2], [2, 0, 450]], 2)
  }

  // Condition of transaction validity
  // A transaction Ti is valid if the addressFrom has a balance >= value after processing all
  // transactions Tj for which j < i. Therefore some of the transactions may be invalid and
  // must be excluded from the blocks.

  /** @dev Initialize accounts.
    * @param _balances account uint[].
    * @param _transactions account uint[][].
    * @param _blocksize block uint.
    */
  function init(
    uint256[] memory _balances,
    uint256[3][] memory _transactions,
    uint256 _blocksize
  ) public returns (bool) {
    balances = _balances;
    blocksize = _blocksize;

    for (uint256 i = 0; i < _transactions.length; i++) {
      // require( _transactions[i].length != 3, "Not a valid array format." );
      if (balances[_transactions[i][0]] < _transactions[i][2]) {
        continue;
      }
      balances[_transactions[i][0]] -= _transactions[i][2];
      balances[_transactions[i][1]] += _transactions[i][2];
      transactions.push(_transactions[i]);
    }

    return true;
  }

  /** @dev Get account balance.
    * @param index account uint.
    * @return balance account uint
    */
  function getAccountBalances(uint256 index) public view returns (uint256) {
    return balances[index];
  }

  function getTransaction(uint256 index)
  public
  view
  returns (uint256[3] memory)
  {
    return transactions[index];
  }

  function getTransactionLength() public view returns (uint256) {
    return transactions.length;
  }

  function getBlocksize() public view returns (uint256) {
    return blocksize;
  }

  /** @dev kill smart contract if something bad happens.
    */
  function kill() public payable onlyOwner {
    selfdestruct(owner);
  }
}
