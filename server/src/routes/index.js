const { Router } = require("express");
const router = Router();

// GET IMPORTS 
const { handlerAllCountries } = require("../handlers/get/handlerAllCountries.js");
const { handlerAllUsers } = require("../handlers/get/handlerAllUsers.js");
const { handlerGetActivities } = require("../handlers/get/handlerGetActivities.js");
const { handlerGetLogin } = require("../handlers/get/handlerGetLogin.js")
const { handlerNameCountry } = require("../handlers/get/handlerNameCountry.js");
const { handlerCountry } = require("../handlers/get/handlerCountry.js");
// POST IMPORTS 
const { handlerPostActivities } = require("../handlers/post/handlerPostActivities.js");
const { handlerPostUser } = require("../handlers/post/handlerPostUser.js");
// DELETE IMPORTS
const { handlerDeleteActivity } = require("../handlers/delete/handlerDeleteActivity.js")
const { handlerDeleteUser } = require("../handlers/delete/handlerDeleteUser.js")

// GET ROUTES
router.get("/countries", handlerAllCountries);
router.get("/user", handlerAllUsers);
router.get("/activities", handlerGetActivities); 
router.get("/login?", handlerGetLogin);
router.get("/countries/name?", handlerNameCountry);
router.get("/countries/:idCountry", handlerCountry);
// POST ROUTES
router.post("/activities", handlerPostActivities);
router.post("/user", handlerPostUser);
// DELETE ROUTES
router.delete("/Activities/:idActivity", handlerDeleteActivity)
router.delete("/user/:idUser", handlerDeleteUser)

module.exports = router;