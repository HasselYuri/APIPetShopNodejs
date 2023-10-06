const ServiceCachorro = require('../services/cachorro.js');

const controller = new ServiceCachorro();

class ControllerCachorro {

    //MÉTODO ADD

    async Add(req, res) {
        try {
            const result = await controller.Add(
                req.body.cachorro
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
                cachorro: result
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
                req.params.idCachorro
            )
            res.status(200).json({
                cachorro: result
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
            await controller.Delete(req.params.idCachorro)
            res.status(200).json({
                cachorro: result
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
            const result = await controller.Update(req.params.idCachorro, req.body.cachorro)
            res.status(200).json({
                cachorro: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCachorro;