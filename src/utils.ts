import { ethers } from 'ethers';
import { Response, NextFunction } from 'express';

/**
 * [START CHECK SIGNER]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * Define signer middleware.
 */
export const isSigner = async (req: any, res: Response, next: NextFunction) => {
    try {
      // TODO: get signer identity
      const provider = new ethers.providers.JsonRpcProvider();
      const wallet = new ethers.Wallet(`${process.env.ACCOUNT_PRIVATE_KEY}`);
      req.signer = wallet.connect(provider);
      
      return next();
    } 
    catch (error) {
      return res.status(501).json('Unauthorized request!');
    }
};
// [END CHECK SIGNER]

/**
 * [START VERIFY TRANSACTION]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define create wallet middleware.
 */
 export const verifyTransaction = async (req: any, res: Response, next: NextFunction) => {
  try {
    // TODO: verify transactions
    const { transactions } = req.body;
    if(!transactions) return;
    transactions.forEach((transaction:any) => {
      if (transaction.length != 3) {
        throw new Error("Invalid transaction");
      }
    });
    next();
  } catch (error) {
    return res.status(501).json('Internal error!');
  }
};
// [END VERIFY TRANSACTION]
