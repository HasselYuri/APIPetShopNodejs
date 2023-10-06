const Atendimento = require('../models/atendimento.js')

class RepositorioAtendimento {

    //Método Add

    async Add(atendimento, transaction) {
        const result = await Atendimento.create(
            atendimento, { transaction }
        )
        return result;
    }

    async PegerTodos() {
        return Atendimento.findAll();
    }

    async PegarUm(idAtendimento, transaction) {
        return Atendimento.findOne({
            where: { idAtendimento },
            transaction
        });
    }

    async Delete(idAtendimento) {
        return Atendimento.destroy({
            where: { idAtendimento }
        });
    }

    async Update(idAtendimento, atendimento) {
        const result = await Atendimento.update(
            atendimento, {
            where: { idAtendimento }
        }
        )
        console.log(result)

        return result;
    }

}

module.exports = RepositorioAtendimento