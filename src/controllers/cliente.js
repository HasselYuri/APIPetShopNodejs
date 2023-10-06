const ServiceCliente = require('../services/cliente.js');

const controller = new ServiceCliente();

class ControllerCliente {

    //MÉTODO ADD

    async Add(req, res) {
        try {
            const result = await controller.Add(
                req.body.cliente
            )
            res.status(201).json({
                cliente: result
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
                cliente: result
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
            console.log(req.params.id)
            const result = await controller.PegarUm(
                req.params.id
            )
            res.status(200).json({
                cliente: result
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
            await controller.Delete(req.params.id)
            res.status(200).json({
                cliente: result
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
            const result = await servico.Update(req.params.id, req.body.cliente)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCliente;