const program = require('commander');
const packageConfig = require('../package');
const config = require('./config');

program
  .version(packageConfig.version)
  .option('-y, --yes', 'force yes for all operations')
  .parse(process.argv);

config.printConfigLocation();