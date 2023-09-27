import yargs from 'yargs';
import  { hideBin } from 'yargs/helpers'

export const yarg = yargs( hideBin( process.argv ) )
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: false,
        describe: 'Multiplication table limit',
        default: 10

    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        describe: 'show Multiplication table',
        default: false
    })
    .option('n', {
        alias: 'name',
        type:'string',
        demandOption: false,
        describe: 'File Name',
        default: 'multiplication-table'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        describe: 'File destination',
        default: 'outputs'
    })
    .check( (argv, options) =>{

        if(argv.b < 1 ) throw 'Error: base must be a greater than 0'
        return true;
    })
    .parseSync()