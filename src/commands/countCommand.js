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
        var countdaughters =daughters.length;
        let queue =[];//to traverse the tree
        // let visited ={};// to avoid the repetetion
        let sons = this.Family.family_graph[person.name] && this.Family.family_graph[person.name]['son'] || [];
        queue = queue.concat(daughters);
        queue = queue.concat(sons);
        // console.log(queue);
        // visited[person.name] = true;
        while(queue.length){
            let pname = queue[0];
            queue.shift();
            if(this.Family.family_graph[pname] && this.Family.family_graph[pname]['daughter'] && this.Family.family_graph[pname]['daughter'].length){
                countdaughters += this.Family.family_graph[pname]['daughter'].length;
                daughters = daughters.concat(this.Family.family_graph[pname]['daughter'])
                queue = queue.concat(this.Family.family_graph[pname]['daughter']);
            }else if(this.Family.family_graph[pname] && this.Family.family_graph[pname]['son'] && this.Family.family_graph[pname]['son'].length){
                queue = queue.concat(this.Family.family_graph[pname]['son']);
            }
        }
        console.log(daughters);
        return countdaughters;
    }
    }
}

module.exports = countCommand;