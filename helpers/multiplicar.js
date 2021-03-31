const fs = require('fs'); //fs = fileSystem
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, limite = 10) => {
	try {
		let salida = '';
		let consola = '';

		for (let i = 1; i <= limite; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
			consola += `${base} ${colors.green('x')} ${i} ${'='.green} ${colors.cyan(base * i)}\n`;
		}

		if (listar) {
			console.log('======================='.rainbow);
			console.log(`     TABLA DEL ${base}     `.red.bold);
			console.log('======================='.rainbow);
			console.log(`${consola}`);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `${colors.green('File Created')} -> Tabla del ${base} --👨‍💻🧡🙌--`;
	} catch (e) {
		throw e;
	}
};

module.exports = {
	crearArchivo
};
