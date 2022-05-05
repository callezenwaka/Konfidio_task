import { init, getAccountBalance } from "../controllers/index";
import express from "express";
const router = express();

router.post('/init', init);

router.post('/balance', getAccountBalance);
 
export default router;