const 
    CONF = require('./config'),
    countCommand = require('./commands/countCommand'),
    addCommand = require('./commands/addCommand'),
    connectCommand = require('./commands/connectCommand');
module.exports  = (input) =>{
    const
        params    = input.split(' '),
        commandType = params[0].toLowerCase(),
        subCommand = [params[1].toLowerCase()];

    //Validate
    if(commandType in CONF.ALLOWED_CMD && CONF.ALLOWED_CMD[commandType]){
        let commandExe ;
        let commandOut;
        //Instantiation Factory Pattern
        if(commandType === "count"){
                commandExe = new countCommand();
                if(input.match(/sons of/gm)){
                    let person ={};
                    let personFrom = input.indexOf(" of ") + " of ".length;
                    person.name = input.substr(personFrom);
                    //execute
                    commandOut = commandExe.findSonsOf(person);
                }else if(input.match(/all daughters of/gm)){
                    let person ={};
                    let personFrom = input.indexOf(" of ") + " of ".length;
                    person.name = input.substr(personFrom);
                    //execute
                    commandOut = commandExe.findAllDaughtersOf(person);
                } else{
                    return new Error(input.toString());
                }
        }else if(commandType == "add" ){
            commandExe = new addCommand();
            if(commandType == "add" && subCommand[0] === "relationship"){
                let relation = {};
                let relationshipFrom = input.indexOf(" relationship ") + " relationship ".length;
                relation.name = input.substr(relationshipFrom);
                commandOut = commandExe.addRelationship(relation);
            }else if(subCommand[0] === "person"){
                let person = {};
                // console.log("input",input);
                let personFrom = input.indexOf(" person ") + " person ".length;
                person.name = input.substr(personFrom);
                commandOut = commandExe.addPerson(person);
            } else{
                return new Error(input.toString());
            }
        }else if(commandType == "connect" && input.match(/^.*?\bas\b.*?\bof\b.*?$/m)){
            //parse command => {}
            let connection={};
            let op1From = input.indexOf("connect ") + "connect ".length;
            let op1To = input.lastIndexOf(" as ");
            connection.op1 = input.substr(op1From, op1To - op1From);

            let relationFrom = input.indexOf(" as ") + " as ".length;
            let relationTo = input.lastIndexOf(" of ");
            connection.relation = input.substr(relationFrom, relationTo - relationFrom);

            let op2From = input.indexOf(" of ") + " of ".length;
            connection.op2 = input.substr(op2From);

            //execute
            commandExe = new connectCommand();
            commandOut = commandExe.connect(connection)
        }else{
            return new Error(input.toString());
        }
        return commandOut;
    }else{
        return commandType + "Not Found";
    }
  };
