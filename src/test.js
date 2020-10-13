const
    cli_manager = require('./cli_manager')

let test_commands = [
    "add relationship son",
    "add relationship daughter",
    "add person John shakespeare",
    "add person Mary Arden",
    "add person Joan",
    "add person Margaret",
    "add person Gillbert",
    "add person Joan1",
    "add person Anne Hathaway",
    "add person William",
    "add person Anne",
    "add person Richard",
    "add person Edmund",
    "connect Joan as daughter of John shakespeare",
    "connect Margaret as daughter of John shakespeare",
    "connect Joan1 as daughter of John shakespeare",
    "connect Anne as daughter of John shakespeare",
    "connect Gillbert as son of John shakespeare",
    "connect William as son of John shakespeare",
    "connect Richard as son of John shakespeare",
    "connect Edmund as son of John shakespeare",

    "connect Joan as daughter of Mary Arden",
    "connect Margaret as daughter of Mary Arden",
    "connect Joan1 as daughter of Mary Arden",
    "connect Anne as daughter of Mary Arden",
    "connect Gillbert as son of Mary Arden",
    "connect William as son of Mary Arden",
    "connect Richard as son of Mary Arden",
    "connect Edmund as son of Mary Arden",

    "add person Susanna",
    "add person John Hall",
    "add person Hamnet",
    "add person Elizabeth",
    "add person Judith",
    "add person Thomas Quiney",
    "add person Thomas",
    "add person Richard",
    "add person Shakespeare",
    "add person Anne Hathaway",
    "connect Susanna as daughter of William",
    "connect Elizabeth as daughter of Susanna",
    "connect Hamnet as son of William",
    "connect Judith as daughter of William",

    "connect Susanna as daughter of Anne Hathaway",
    "connect Hamnet as son of Anne Hathaway",
    "connect Judith as daughter of Anne Hathaway",

    "connect Shakespeare as son of Judith",
    "connect Richard as son of Judith",
    "connect Thomas as son of Judith",
    "count sons of William",
    "count sons of John shakespeare",
    "count all daughters of Mary Arden",
    "count all daughters of Anne Hathaway"

];
module.exports.test = ()=>{
    test_commands.forEach(line=>{
        console.log("Executing:: ",line);
        console.log(cli_manager(line));
    })
}

