//{p1:{
//     name:
// }}

module.exports ={
    Person:{},
    add:function(person){
        this.Person[person.name] = person;
        return;
    }
}