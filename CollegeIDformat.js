class Collegeid {
    constructor(first_name,last_name,bloodgrp){
        this.first_name=first_name;
        this.last_name=last_name;
        this.bloodgrp=bloodgrp;
    }
    full_name(){                                         //getfullname=conversion can be used
        return `${this.first_name} ${this.last_name}`;
    }
    bloodgroup(){
        return `${this.bloodgrp}`;
    }
}

let student1 = new Collegeid("Bhavna","Kamble","B+");
let student2 = new Collegeid("Sanjita","Salunke","O+");
console.log(student1.full_name());
console.log(student1.bloodgroup());
console.log(student2.full_name());
console.log(student2.bloodgroup());