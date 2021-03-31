const argv = require('yargs')
	.options('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar'
	})
	.options('l', {
		alias: 'listar',
		type: 'boolean',
		default: false,
		describe: 'Imprime en consola el resultado'
	})
	.options('h', {
		alias: 'hasta',
		type: 'number',
		demandOption: true,
		default: 10,
		describe: 'Limite de la tabla'
	})
	.check((argv, options) => {
		// console.log('yargs', argv);
		if (isNaN(argv.b)) {
			throw 'La base tiene que ser un numero';
		}
		return true;
	}).argv;

module.exports = argv;
