const { Router } = require("express");
const router = Router();

// IMPORTACIONES GET
const { handlerAllCountries } = require("../handlers/get/handlerAllCountries.js");
const { handlerGetActivities } = require("../handlers/get/handlerGetActivities.js");
const { handlerGetLogin } = require("../handlers/get/handlerGetLogin.js")
const { handlerNameCountry } = require("../handlers/get/handlerNameCountry.js");
const { handlerCountry } = require("../handlers/get/handlerCountry.js");
// IMPORTACIONES POST
const { handlerPostActivities } = require("../handlers/post/handlerPostActivities.js");
const { handlerPostUser } = require("../handlers/post/handlerPostUser.js");

// RUTAS GET
router.get("/countries", handlerAllCountries); //X//
router.get("/activities", handlerGetActivities); //X// Faltan que tenga datos la tabla de activities
router.get("/login?", handlerGetLogin) //X//
router.get("/countries/name?", handlerNameCountry); //X//
router.get("/countries/:idCountry", handlerCountry); //X//

// RUTAS POST
router.post("/activities", handlerPostActivities); //X// Faltan que tenga datos la tabla de countries 
router.post("/user", handlerPostUser); //X//

module.exports = router;