const Cliente = require('../models/cliente.model');

exports.getAll = async (req, res) => {
    Cliente.getAll( (err, data) => {
        if (err) return res.status(500).send({Error: err});
        res.json(data);
    })
}

exports.getById = async (req, res) => {
    Cliente.getById(req.params.cliente_id,  (err, data) => {
        if (err) return res.status(500).send({Error: err});
        res.json(data);
    })
}

exports.insertOne = async (req, res) => {
    Cliente.insertOne(req.body,  (err, data) => {
        if (err) return res.status(500).send({Error: err});
        res.json(data);
    })
}

exports.updateOne = async (req, res) => {
    Cliente.updateOne(req.params.cliente_id, req.body,  (err, data) => {
        if (err) return res.status(500).send({Error: err});
        res.json(data);
    })
}

exports.deleteOne = async (req, res) => {
    Cliente.deleteOne(req.params.cliente_id,  (err, data) => {
        if (err) return res.status(500).send({Error: err});
        res.json(data);
    })
}