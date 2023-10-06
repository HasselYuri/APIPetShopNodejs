const Atendimento = require('../models/atendimento.js');
const Cachorro = require('../models/cachorro.js')

class RepositorioCachorro {

    //Método Add

    async Add(cachorro, transaction) {
        const result = await Cachorro.create(
            cachorro, { transaction }
        )
        return result;
    }

    async PegerTodos() {
        return Cachorro.findAll();
    }

    async PegarUm(idCachorro, transaction) {
        return Cachorro.findOne({
            where: { idCachorro },
            transaction,
            include: [Atendimento]
        });
    }

    async Delete(idCachorro) {
        return Cachorro.destroy({
            where: { idCachorro }
        });
    }

    async Update(idCachorro, cachorro) {
        const result = await Cachorro.update(
            cachorro, {
            where: { idCachorro }
        }
        )
        console.log(result)

        return result;
    }

}

module.exports = RepositorioCachorro