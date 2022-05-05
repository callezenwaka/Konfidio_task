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
    const result = await blockchain.connect(addr1).init(balances, transactions, blockSize);
    await result.wait();

    const res = await blockchain.connect(addr2).getAccountBalances(index);
    console.log(res);
    expect((res).toNumber()).to.equal(500);
    
    // npx hardhat test ./test/Blockchain.test.ts
    // expect(res.from).to.equal(addr1.address);
    // expect(res.to).to.equal(services.address);
    // expect(res.contractAddress).to.equal(null);
    // expect(res.transactionIndex).to.equal(0);
  });

  // it("Should return a tenant service", async function () {
  //   const [owner, addr1, addr2, addr3] = await ethers.getSigners();

  //   const res = await services.connect(addr1).getService(index);

  //   expect(res).to.be.an('array').that.is.not.empty;
  //   expect(res.name).to.equal(name);
  //   expect(res.cost).to.equal(cost);
  //   expect(res.index).to.equal(index);
  // });
});
