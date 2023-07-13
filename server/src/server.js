const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

// IMPORTACIONES

// MIDDLEWARES
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
// USO DE ROUTER
server.use("/CountriesPI", router);

module.exports = server;
