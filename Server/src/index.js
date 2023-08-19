const express = require("express");
const server = express();
const router = require("../routes/index.js")

const PORT = 3001;

// Instalar Morgan
// Instalar Cors

//middleWare
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use("/rickandmorty", router)      //()=>{console.log("Entrando!!")}



server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
})














//! HTTP
// const http = require("http");
// // const data = require("../utils/data.js")
// const PORT = 3001;
// const getCharById = require("../controllers/getCharById")


// http.createServer((req, res)=>{

//     res.setHeader("Access-Control-Allow-Origin", "*");  //* Permiso de acceso A TODOS!!
//     const {url} = req;
//     console.log(`Recibí una request de ${url}`);

//     if (url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop());
//         getCharById(res, id);
//     }
//     else {
//         res.writeHead(404, {"Content-type" : "application/json"})
//         return res.end(JSON.stringify({error: "Route not found!!"}))
//     }



// //*             (opcional)
// }).listen(PORT, ()=>{
//     console.log(`Servidor  corriendo en puerto ${PORT}`)
// })


//-----------------------------------------------------------------------------------
// http.createServer((req, res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;
//     console.log(`Recibí una request de: ${url}`);
    
//     console.log(`Server in port ${PORT}`);

//     if (url === "/") {
//         res.writeHead(200, {"Content-Type" : "text/plain" });
//         return res.end("Funciona OK!!");
//     }

//     if (url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop());   //*Creo array separado por "/" y me quedo con el último indice
//         const character = data.find(personaje => personaje.id === id);//* Guarda el personaje que matchee con el ID
        
//         if (character) {
//             res.writeHead(200, {"Content-Type" : "application/json" });
//             return res.end(JSON.stringify(character));
//         }
//         else {
//             res.writeHead(404, {"Content-Type" : "application/json" });
//             return res.end(JSON.stringify({error: "Character not found"}));

//         }
//     }

//     res.writeHead(404, {"Content-Type" : "text/plain" });
//     return res.end(`La dirección ${url} no existe!!`);





// }).listen(PORT, ()=> {
//         console.log(`Servidor corriendo en puerto: ${PORT}`)
//     });



