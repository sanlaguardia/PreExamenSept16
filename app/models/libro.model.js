
module.exports = (sequelize, Sequelize) => {
	const Libro = sequelize.define('libro', {	
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	},
	  titulo: {
			type: Sequelize.STRING
	},
		autor: {
			type: Sequelize.STRING
	},
		isbn: {
			type: Sequelize.INTEGER
	},
		editorial: {
			type: Sequelize.STRING
	},
		anioPublicacion: {
			type: Sequelize.INTEGER
	},
		categoria: {
			type: Sequelize.STRING
	},
		cantidadPosible: {
			type: Sequelize.INTEGER
	},
		ubicacion: {
			type: Sequelize.STRING
	},
	
	});
	
	return Libro;
}