
class addCommand{
    Family = require('./../models/family');
    Person = require('./../models/person');
    Relation = require('./../models/relation');
    constructor(){
    this.addPerson = (person)=>{
        this.Person.add(person);
        console.log(this.Person)
        return true;
    };
    this.addRelationship = (relation)=>{
        this.Relation.add(relation);
        console.log(this.Relation)
        return true;
    }
    }
}

module.exports = addCommand;