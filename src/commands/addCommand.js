const
    Family = require('./../models/family'),
    Person = require('./../models/person'),
    Relation = require('./../models/relation');
class addCommand{
    constructor(){
    this.addPerson = (person)=>{
        Person[person.name] = person;
        return true;
    };
    this.allRelationship = (relation)=>{
        Relation[relation] = true;
        return true;
    }
    }
}