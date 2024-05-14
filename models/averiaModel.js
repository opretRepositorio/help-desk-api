const database = require('../config/database')

class averiaModel {
    constructor (){}

    // Obtiene un averia de la DATABASE por id_averia
    async GetAveriaById(id_averia){
        let [averia, _] = await database.execute(`CALL sp_get_averia_by_id('${id_averia}');`);
        return averia;
    }

    // Obtiene un averia de la DATABASE por averia_nombre
    async GetAveriaByNombre(averia_nombre){
        let [averia, _] = await database.execute(`CALL sp_get_averia_by_nombre('${averia_nombre}');`);
        return averia;
    }

    // Inserta una averia de la DATABASE por averia_nombre
    async SetAveria(averia_nombre){
        let [averia, _] = await database.execute(`CALL sp_set_averia(
            '${averia_nombre}'
            );`);
        return averia;
    }
}

module.exports = averiaModel;