const ServiceAtendimento = require('../services/atendimento.js');

const controller = new ServiceAtendimento();

class ControllerAtendimento {

    //MÉTODO ADD

    async Add(req, res) {
        try {
            const result = await controller.Add(
                req.body.atendimento
            )
            res.status(201).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async PegarTodos(_, res) {
        try {
            const result = await controller.PegarTodos()
            res.status(200).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error
            })

        }
    }

    async PegarUm(req, res) {
        try {
            console.log(req.params.idAtendimento)
            const result = await controller.PegarUm(
                req.params.idAtendimento
            )
            res.status(200).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error
            })

        }
    }

    async Delete(req, res) {
        try {
            await controller.Delete(req.params.idAtendimento)
            res.status(200).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async Update(req, res) {
        try {
            const result = await controller.Update(req.params.idAtendimento, req.body.atendimento)
            res.status(200).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerAtendimento;