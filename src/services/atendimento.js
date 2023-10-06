const RepositorioAtendimento = require('../repositories/atendimento.js');

const service = new RepositorioAtendimento();

class ServiceAtendimento {

    VerificarAtendimento(atendimento) {
        if (!atendimento) {
            throw new Error('Não foi enviada o atendimento para adicionar');
        } else if (!atendimento.valorAtendimento) {
            throw new Error('Não foi enviado o valor do atendimento');
        } else if (!atendimento.statusAtendimento) {
            throw new Error('Não foi enviado o status do atendimento');
        }

        return true
    }

    //MÉTODO ADD
    async Add(atendimento, transaction) {
        this.VerificarAtendimento(atendimento)

        return service.Add(atendimento, transaction)
    }

    async PegarTodos() {
        return service.PegerTodos()
    }

    async PegarUm(idAtendimento, transaction) {
        return service.PegarUm(idAtendimento, transaction)
    }

    async Delete(idAtendimento) {
        return service.Delete(idAtendimento);
    }

    async Update(idAtendimento, atendimento) {
        if (!idAtendimento) {
            throw new Error('Não foi enviada o identificador da pessoa para alterar');
        }
        this.VerificarAtendimento(atendimento)

        return service.Update(idAtendimento, atendimento);
    }
}

module.exports = ServiceAtendimento;