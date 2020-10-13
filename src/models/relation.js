//{r1:true
// }}

module.exports ={
    Relation:{},
    add:function(relation){
        this.Relation[relation.name] = true;
        return;
    }
}