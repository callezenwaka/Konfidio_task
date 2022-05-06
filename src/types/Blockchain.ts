type transaction = [3];

type balance = number;

interface Blockchain {
  balances: [balance];
  transactions: [transaction];
  blockSize: number;
}

export default Blockchain;