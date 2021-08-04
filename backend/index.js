const express = require("express");
//validar las reglas de las configuraciones
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log("BackEnd server running on port: ", process.env.PORT));

dbConnection();


