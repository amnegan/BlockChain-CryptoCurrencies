const{ Blockchain,Transaction }=require('./blockchain');
const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const myKey=ec.keyFromPrivate('adb8d02688881c577b2ef377ac39ce1822df13e0566ccb9fef977cc869f5cc49');
const myWalletAddress=myKey.getPublic('hex');

const Negan=new Blockchain();
 const tx1=new Transaction(myWalletAddress,'address 2', 10);
 tx1.signTransaction(myKey);
 Negan.addTransaction(tx1);

console.log('\nStarting the miner...');
Negan.minePendingTransactions(myWalletAddress);
console.log('\nBalance :',Negan.getBalanceOfAddress(myWalletAddress));

Negan.chain[1].transactions[0].amount=1;
console.log('Is Chain Valid?',Negan.isChainValid());



