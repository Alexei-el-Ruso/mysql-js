const db = require("../config/db");

const Cliente = {
    getAll: (callback) => {
        db.query("SELECT * FROM clientes;", callback);
    },

    getById: (cliente_id, callback) => {
        db.query("SELECT * FROM clientes WHERE cliente_id = ?;", [cliente_id], callback);
    },

    insertOne: (cliente, callback) => {
        db.query("INSERT INTO clientes(cliente_id, nombre, email, telefono) VALUES cliente;", [cliente], callback);
    },

    updateOne: (cliente_id, cliente, callback) => {
        db.query("UPDATE clientes SET cliente WHERE cliente_id = ?;", [cliente_id, cliente], callback);
    },

    deleteOne(cliente_id, callback) {
        db.query("DELETE FROM clientes WHERE cliente_id = ?;", [cliente_id], callback);
    }
}

module.exports = Cliente;