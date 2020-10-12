const 
    CONF = require('./config'),
    countCommand = require('./commands/countCommand'),
    addCommand = require('./commands/addCommand'),
    connectCommand = require('./commands/countCommand');
module.exports  = (input) =>{
    const
        params    = input.split(' '),
        commandType = params[0].toLowerCase(),
        subCommand = [params[1].toLowerCase(),params[2].toLowerCase(),params[3].toLowerCase()];

    //Validate
    if(commandType in CONF.ALLOWED_CMD && CONF.ALLOWED_CMD[commandType]){
        let commandConfig = CONF.ALLOWED_CMD[commandType];
        let commandExe ;
        let commandOut;
        //Instantiation Factory Pattern
        if(commandType === "count"){
                commandExe = new countCommand();
                if(subCommand[0] === "sons" && subCommand[1] === "of"){
                    commandOut = commandExe.findSonsOf(person);
                }else if(subCommand[0] === "all" && subCommand[1]  =="daughters" && subCommand[2] === "of"){
                    commandOut = commandExe.findAllDaughtersOf(person);
                } else{
                    return new Error(input.toString());
                }
        }else if(commandType == "add" ){
            commandExe = new addCommand();
            if(commandType == "add" && subCommand[0] === "relationship"){
                commandOut = commandExe.allRelationship(person);
            }else{
                commandOut = commandExe.addPerson(person);
            }
        }else if(commandType == "connect" && input.match(/^.*?\bas\b.*?\bof\b.*?$/m)){
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
