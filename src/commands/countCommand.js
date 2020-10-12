const
    Family = require('./../models/family'),
    Person = require('./../models/person'),
    Relation = require('./../models/relation');
class countCommand{
    constructor(){
    this.findSonsOf = (person)=>{
        let sons = Family[person.name]['son'];
        let countsons = sons.length || 0;
        return countsons;
    };
    this.findAllDaughtersOf = (person)=>{
        let daughters = Family[person.name]['daughter'];
        let countdaughters = daughters.length || 0;
        return countdaughters;
    }
    }
}