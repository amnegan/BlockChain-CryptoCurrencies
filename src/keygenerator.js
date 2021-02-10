const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const key=ec.genKeyPair();
const privateKey=key.getPrivate('hex');
const publicKey=key.getPublic('hex');
console.log('\n','key: ',key);
console.log('\n','private key: ',privateKey);
console.log('\n','public key: ',publicKey);
