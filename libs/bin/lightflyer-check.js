const program = require('commander');
const app = require('../../app');


program
  .command('start')
  .description('Start App')
  .action(app.init);


  // If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
