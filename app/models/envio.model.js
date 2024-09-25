module.exports = (sequelize, Sequelize) => {
	const Envio = sequelize.define('envio', {	
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
	
	return Envio;
}