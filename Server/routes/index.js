const router = require("express").Router()

// Controllers
const login = require("../controllers/login")
const getCharById = require("../controllers/getCharById")
const {deleteFav, postFav} = require("../controllers/handleFavorites")

// "https://rickandmortyapi.com/api/character/5" --> res.params --> {id:5}
router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;