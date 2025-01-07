const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index,date,seat,data,previoushash = ""){
        this.index = index;                                   //basic architecture
        this.date = date;
        this.seat=seat;
        this.data = data;
        this.previoushash = previoushash;
        this.hash = this._calculateHash();
    }
    _calculateHash(){
        return SHA256(this.index+this.data+this.date+this.previoushash).toString()
    }
} 
this.index>100
console.log('Bookings are not allowed!! Sorry!!')
//ifelse condition for name seat
//Class Methodology

class LND{
    constructor(){
        this.chain = [this._createGenesisBlock()]
    }
    _createGenesisBlock(){
        return new Block(0,"10-11-1998",1,{Name: "Bhavna" ,Age: 22},0);    //(1,...,1)
    }
    getLatestBlock(){                                 //let lastest bock =lastblock
        return this.chain[this.chain.length - 1];    
    }
    addBlock(newBlock){
        newBlock.previoushash=this.getLatestBlock().hash;
        newBlock.hash=newBlock._calculateHash();
        this.chain.push(newBlock)

    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            let previousBlock = this.chain[i-1];
            let CurrentBlock = this.chain[i];
            if (previousBlock.hash!== CurrentBlock.previoushash) {
                console.log("Hash Chain Break!!")
                return false;
            }
            if (CurrentBlock.hash!== CurrentBlock._calculateHash()) {
                console.log("Hash Chain Break!!")
                return false;               
            }
        }
        return true;
    }

}
const nnv = new LND();      //creating object==nnv
console.log(nnv.chain[0]);                                     //[1]

const Block1 = new Block(1,"7-03-19",2,{Name: "SRK" ,Age: 52},4);     //creating object==nnv
nnv.addBlock(Block1)      
console.log(nnv.chain[1]);  

const Block2 = new Block(2,"10-05-11",1,{Name: "Kajol" ,Age: 48},60);     //creating object==nnv
nnv.addBlock(Block2)      
console.log(nnv.chain[2]);  

const Block3 = new Block(3,"12-01-12",1,{Name: "SiddhartMalhotra" ,Age: 32},90);     //creating object==nnv
nnv.addBlock(Block3)      
console.log(nnv.chain[3]); 

//add block4
const block4 = new Block(4,'12-09-1997',1,{Name:"Prince" ,Age: 22}
);
nnv.addBlock(block4) 
//forloopchallenge
//red or green

console.log(nnv.isChainValid());
//data change in index=2
//nnv.chain[2].data = 10;
//console.log(nnv.isChainValid());
//hash change challenge
console.log(nnv.chain[4].data);
//change name1,name2 and condition if else