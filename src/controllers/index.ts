import 'dotenv/config';
import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import blockchainABI from "../../artifacts/contracts/Blockchain.sol/Blockchain.json";
import { blockchainAddress } from '../config';

/**
 * [START INIT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json string
 * Initialize blockchain
 */
 export const init = async (req: any, res: Response, next: NextFunction): Promise<any> => {
  try {
		// TODO: create a provider and initialize blockchain
    const { balances, transactions, blockSize } = req.body;
    if (!balances || !transactions || !blockSize) return res.status(500).json('Invalid transactions!');

    const provider = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:8545`);
    const wallet = new ethers.Wallet(`${process.env.ACCOUNT_PRIVATE_KEY}`);
    const signer = wallet.connect(provider);
    const blockchainContract = new ethers.Contract(blockchainAddress, blockchainABI.abi, signer);
    const response = await blockchainContract.init(balances, transactions, blockSize);
    await response.wait();

    return res.status(201).json('Created');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
}
// [END INIT]

/**
 * [START GET ACCOUNT BALANCE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json item
 * Retrieve item
 */
export const getAccountBalance = async (req: any, res: Response, next: NextFunction): Promise<any> => {
	try {
		// Todo: create a provider and query for balance
    const { index } = req.params;
    if (!index) return;
    let balance = null;

    const provider = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:8545`);
    const wallet = new ethers.Wallet(`${process.env.ACCOUNT_PRIVATE_KEY}`);
    const signer = wallet.connect(provider);
    const blockchainContract = new ethers.Contract(blockchainAddress, blockchainABI.abi, signer);
    balance = await blockchainContract.getAccountBalances(index);
    if (!balance) return res.status(200).json(null);

		return res.status(200).json(balance.toNumber());
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET ACCOUNT BALANCE]