import { init, getAccountBalance } from "../controllers/index";
import { verifyTransaction } from '../utils';
import express from "express";
const router = express();

// @route POST /
// @desc  Initialize blockchain
// @access Public
router.post('/', verifyTransaction, init);

// @route GET /:index
// @desc  Account Balance
// @access Public
router.get('/:index', getAccountBalance);
 
export default router;