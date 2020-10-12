const
    Family = require('./../models/family'),
    Person = require('./../models/person'),
    Relation = require('./../models/relation');
class connectCommand{
    constructor(){
    this.connect = (connection)=>{
        if(connection.op1 in Person && connection.op2 in Person  && connection.relation in Relation){
            Family.add(connection);
            return true;
        }else{
            return false;
        }
    };
    }
}