# Konfidio Blockchain Backend Task

Task
Given two arrays representing initialBalances and transactions and an integer blockSize, create a blockchain that includes all valid pending transactions in the order
in which they are given. Provide functionality to get the balance of a specific account on the blockchain

## Interface
1. init(initialBalances, transactions, blockSize) => A function that initializes the blockchain.
2. getAccountBalance(accountIndex) => returns the account balance of a specific account.

## API Endpoints
- GET ROUTE ('/')
  - Description: Home
  - Params: None
- POST ROUTE ('/')
  - Description: Initialize blockchain
  - Payload: balances, transactions, blockSize
- GET ROUTE ('/index')
  - Description: Get account balance
  - Params: index
- GET ROUTE ('/*')
  - Description: Not Found
  - Params: None

## Project Setup
Check out the environment variables in the `.env.example` file and promptly adjust after cloning the repository.
Replace contract address in the `config.ts` file after deployment.

### Clone repo
```
git clone https://github.com/callezenwaka/Konfidio_task
```

### Install dependencies
```
npm install
```

### Compile solidity
```
npx hardhat compile
```

### Test solidity code
```
npx hardhat test ./test/Blockchain.test.ts
```

### Setup hardhat node
```
npx hardhat node
```

### Deploy hardhat node
```
npx hardhat run scripts/deploy.ts --network localhost
```

### Lauch app in dev mode
```
npm run dev
```

### Test api endpoints
```
npm test
```

### Build app for prod
```
npm run build
```

### Lauch app in p mode
```
npm run start
```