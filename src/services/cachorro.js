const RepositorioCachorro = require('../repositories/cachorro.js');

const service = new RepositorioCachorro();

class ServiceCachorro {

    VerificarCachorro(cachorro) {
        if (!cachorro) {
            throw new Error('Não foi enviada a cliente para adicionar');
        } else if (!cachorro.nomeCachorro) {
            throw new Error('Não foi enviado o nome do cliente');
        } else if (!cachorro.racaCachorro) {
            throw new Error('Não foi enviado o telefone do cliente');
        }

        return true
    }

    //MÉTODO ADD
    async Add(cachorro, transaction) {
        this.VerificarCachorro(cachorro)

        return service.Add(cachorro, transaction)
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

    async Update(id, cachorro) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da pessoa para alterar');
        }
        this.VerificarCachorro(cachorro)

        return repositorio.Update(id, cachorro);
    }
}

module.exports = ServiceCachorro;