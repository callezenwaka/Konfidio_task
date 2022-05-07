import { Response, NextFunction } from 'express';

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
