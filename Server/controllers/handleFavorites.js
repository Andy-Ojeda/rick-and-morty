let myFavorites = [];

const postFav = (req, res) => {
    //? req.body --> {id, name, res} = req.body
    //! Ojo si viene un id repetido
    myFavorites.push(req.body)
    res.json(myFavorites)

}

const deleteFav = (req, res) => {
    const {id} = req.params  //* "5" por ejemplo
    const filtered = myFavorites.filter(fav => fav.id !== Number(id))   //* Me guardo todos los que no coincidan con el id recibido. Es una forma de "borrar un elemento"
    myFavorites = filtered
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}



