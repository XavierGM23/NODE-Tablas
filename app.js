const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

/**********************************************/
/** ARGV - UTILIZANDO YARGS **/
/**********************************************/

console.log(argv);
// console.log(process.argv)

let base = argv.base;
console.log('base: yargs =>', base);

/**********************************************/

/**********************************************/
/** ARGV DE FORMA MANUAL - MUCHOS BUGS**/
/**********************************************/

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log(base);

/**********************************************/

crearArchivo(argv.base, argv.listar, argv.hasta)
	.then((nombreArchivo) => console.log(nombreArchivo, 'Status: creado'))
	.catch((error) => console.log(error));
