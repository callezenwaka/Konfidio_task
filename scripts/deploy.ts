// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const Blockchain = await ethers.getContractFactory("Blockchain");
  const blockchain = await Blockchain.deploy();
  await blockchain.deployed();
  console.log("Blockchain deployed to:", blockchain.address);
}

// Use async/await everywhere and properly handle errors.
const init = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

init();