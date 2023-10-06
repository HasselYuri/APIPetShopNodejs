const RepositorioCliente = require('../repositories/cliente.js');

const service = new RepositorioCliente();

class ServiceCliente {

    VerificarCliente(cliente) {
        if (!cliente) {
            throw new Error('Não foi enviada a cliente para adicionar');
        } else if (!cliente.nome) {
            throw new Error('Não foi enviado o nome do cliente');
        } else if (!cliente.telefone) {
            throw new Error('Não foi enviado o telefone do cliente');
        }

        return true
    }

    //MÉTODO ADD
    async Add(cliente, transaction) {
        this.VerificarCliente(cliente)

        return service.Add(cliente, transaction)
    }

    async PegarTodos() {
        return service.PegerTodos()
    }

    async PegarUm(id, transaction) {
        return service.PegarUm(id, transaction)
    }

    async Delete(id) {
        return service.Delete(id);
    }

    async Update(id, cliente) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da pessoa para alterar');
        }
        this.VerificarCliente(cliente)

        return repositorio.Update(id, cliente);
    }
}

module.exports = ServiceCliente;