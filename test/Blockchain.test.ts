import { expect } from "chai";
import { ethers } from "hardhat";

describe("Blockchain", async function () {
  let blockchain: any;
  const balances: number[] = [100, 100, 500];
  const transactions: number[][] = [[0, 1, 50], [1, 2, 80], [2, 0, 450]];
  const blockSize: number = 2;
  const index: number = 0;

  before(async () => {
    const Blockchain = await ethers.getContractFactory("Blockchain");
    blockchain = await Blockchain.deploy();
    await blockchain.deployed();
    console.log("Blockchain deployed to:", blockchain.address);
  });

  it("Should initialize blockchain", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const init = await blockchain.connect(addr1).init(balances, transactions, blockSize);
    const response = await init.wait();

    expect(response.from).to.equal(addr1.address);
    expect(response.to).to.equal(blockchain.address);
  });

  it("Should return an account balance", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const res = await blockchain.connect(addr2).getAccountBalances(index);

    expect((res).toNumber()).to.equal(500);
  });
});
