module.exports = (sequelize, Sequelize) => {
	const Traslado = sequelize.define('traslado', {	
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	},
        direccionExacta: {
            type: Sequelize.STRING
    },
        departamento: {
            type: Sequelize.STRING
    },
        municipio: {
            type: Sequelize.STRING
    },

	});
	
	return Traslado;
}