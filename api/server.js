const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

//Routes
//RegistrationRoute
//LoginRoute
//StrainRoute
//Effect Route

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

module.exports = server;
