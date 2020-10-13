const
    cli_manager = require('./cli_manager')

    cli = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

cli.on('line', (line) => {
  console.log(cli_manager(line));
});