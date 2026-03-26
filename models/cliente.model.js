const db = require("../config/db");

const Cliente = {
    getAll: (callback) => {
        db.query("SELECT * FROM clientes;", callback);
    },

    getById: (cliente_id, callback) => {
        db.query("SELECT * FROM clientes WHERE cliente_id = ?;", [cliente_id], callback);
    },

    insertOne: (cliente, callback) => {
        db.query("INSERT INTO clientes SET ?;", cliente, callback);
    },


    insertSecClient: (cliente_id, nombre, email, telefono, callback) => {
        const sql = "CALL sp_insertar_cliente_seguro (?,?,?,?);";
        db.query(sql, [cliente_id, nombre, email, telefono], callback);
    },

    updateOne: (cliente_id, cliente, callback) => {
        db.query("UPDATE clientes SET ? WHERE cliente_id = ?;", [cliente, cliente_id], callback);
    },

    deleteOne: (cliente_id, callback) => {
        db.query("DELETE FROM clientes WHERE cliente_id = ?;", [cliente_id], callback);
    }
}

module.exports = Cliente;