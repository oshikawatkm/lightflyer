#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('start', 'Start lightflyer nodes')
  .command('stop', 'Stop lightflyer nodes')
  .parse(process.argv);




  program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}