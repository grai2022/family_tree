class countCommand{
    Family = require('./../models/family');
    Person = require('./../models/person');
    Relation = require('./../models/relation');
    constructor(){
    this.findSonsOf = (person)=>{
        let sons = this.Family.family_graph[person.name] && this.Family.family_graph[person.name]['son'] || [];
        let countsons = sons.length || 0;
        return countsons;
    };
    this.findAllDaughtersOf = (person)=>{
        let daughters = this.Family.family_graph[person.name] && this.Family.family_graph[person.name]['daughter'] || [];
        var countdaughters =0;
        let queue =[];//to traverse the tree
        let visited ={};// to avoid the repetetion
        queue.concat(daughters);
        visited[person.name] = true;
        while(queue.length){
            let pname = queue[0];
            queue.shift();
            if(pname in visited){
                continue;
            }else{
                countdaughters++;
                queue.concat(this.Family.family_graph[pname] && this.Family.family_graph[pname]['daughter'] || []);
            }
        }
        return countdaughters;
    }
    }
}

module.exports = countCommand;