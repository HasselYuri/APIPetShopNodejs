const Cliente = require('../models/cliente.js')

class RepositorioCliente {

    //Método Add

    async Add(cliente, transaction) {
        const result = await Cliente.create(
            cliente, { transaction }
        )
        return result;
    }

    async PegerTodos() {
        return Cliente.findAll();
    }

    async PegarUm(id, transaction) {
        return Cliente.findOne({
            where: { id },
            transaction
        });
    }

    async Delete(id) {
        return Cliente.destroy({
            where: { id }
        });
    }

    async Update(id, cliente) {
        const result = await Cliente.update(
            cliente, {
            where: { id }
        }
        )
        console.log(result)

        return result;
    }

}

module.exports = RepositorioCliente