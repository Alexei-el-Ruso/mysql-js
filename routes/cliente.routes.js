const express = require('express');
const router = express.Router();

const controller = require('../controllers/cliente.controller');

router.get("/", controller.getAll)

router.get("/:cliente_id", controller.getById)

router.post("/new", controller.insertOne)

router.put("/update/:cliente_id", controller.updateOne)

router.delete("/delete/:cliente_id", controller.deleteOne)

module.exports = router;