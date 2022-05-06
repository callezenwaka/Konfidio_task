import { init, getAccountBalance } from "../controllers/index";
import { isSigner, verifyTransaction } from '../utils';
import express from "express";
const router = express();

router.post('/', verifyTransaction, init);

router.get('/:index', getAccountBalance);
 
export default router;