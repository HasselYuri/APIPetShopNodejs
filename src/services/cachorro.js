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

    async PegarUm(idCachorro, transaction) {
        return service.PegarUm(idCachorro, transaction)
    }

    async Delete(idCachorro) {
        return service.Delete(idCachorro);
    }

    async Update(idCachorro, cachorro) {
        if (!idCachorro) {
            throw new Error('Não foi enviada o identificador da pessoa para alterar');
        }
        this.VerificarCachorro(cachorro)

        return service.Update(idCachorro, cachorro);
    }
}

module.exports = ServiceCachorro;