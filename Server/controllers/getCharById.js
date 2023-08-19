const axios = require("axios")

// const URL = "http://rickandmortyapi.com/api/character";
require("dotenv").config();
const {URL} = process.env;


//console.log(`Hola mundo ${URL}`)
//axios(`${URL}/${id}`)


const getCharById = (req, res) => {
    const {id} = req.params;    //* Recibo por parámetro (:id)

    axios(`${URL}/${id}`)       //! Ver si me esta tomando bien las variables
        .then(({data}) => {     //* {data} porque axios devuelve un objeto y la propiedad con la info viene en la propiedad "data"
            const {id, name, gender, species, origin, image, status} = data;
            const character = {id, name, gender, species, origin, image, status};
            
            return name ? res.status(201).json(character)   //* Si fuera status(200) no hace falta ponerlo porque json lo interpreta asi.
            : res.status(404).json({message : "Not Found"})

        })           
        .catch((error) => {
            return res.status(500).json({message : error});
        })
}










module.exports = getCharById;


//-------------------------------------------------------------------------------------
//!Con HTTP
// const axios = require("axios");
// // const URL = "https://rickandmortyapi.com/api/character";
// require("dotenv").config();
// const {URL} = process.env;

// const successHandler = (response, res) => {
//     // console.log(response);
//     const {id, name, gender, species, origin, image, status} = response.data;
//     const character = {id, name, gender, species, origin, image, status};
//     res.writeHead(200, {"Content-type" : "application/json"})
//     res.end(JSON.stringify(character))
// }

// const errorHandler = (error, res) => {
//     // console.log(error);
//     res.writeHead(500, {"Content-type" : "text/plain"})
//     res.end("Sucedió el siguiente error: " + error.message)
// }

// const getCharById = (res, id) => {
//     axios(`${URL}/${id}`)
//         .then(response => successHandler(response, res), error => errorHandler(error, res))
//         // .catch(error => errorHandler(error, res))
// }

// module.exports = getCharById;



//--------------------------------------------------------------
/*
.then(successHandler, errorHandler)

FETCH
fetch(url)
.then(a => b, error => alert(error sobre el fetch))
.then(b => c, error => alert(error sobre lo que pasó con b))
.then(c => d)
.catch(error => alert(error general de lo que sea ni no hay ,manejador de error en algun caso))


*/

