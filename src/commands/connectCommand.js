
class connectCommand{
        Family = require('./../models/family');
        Person = require('./../models/person');
        Relation = require('./../models/relation');
    constructor(){
    this.connect = (connection)=>{
        console.log(connection);
        if(connection.op1 in this.Person.Person && connection.op2 in this.Person.Person && connection.relation in this.Relation.Relation){
            this.Family.add(connection);
            console.log(this.Family)
            return true;
        }else{
            console.log(this.Person);
            console.log(this.Relation)
            return false;
        }
    };
    }
}

module.exports = connectCommand;