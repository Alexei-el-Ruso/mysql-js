const express = require("express");
const cors = require("cors");
const clientes = require("./routes/cliente.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clientes);

app.listen(7654, () => {
    console.log("Server started on port 7654");
})