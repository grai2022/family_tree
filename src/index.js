const
    cli_manager = require('./cli_manager'),
    seed = require('./test');

    seed.test();
    cli = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

cli.on('line', (line) => {
  console.log(cli_manager(line));
});