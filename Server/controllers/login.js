const users = require("../utils/users.js");

const login = (req, res) => {
    //Console.log(req.query) --> {email:"tuar_a@hotmail.com", password: "pass123"}
    //URL --> ?email=tuar_a@hotmail.com&password=pass123
    const {email, password} = req.query;
    let access = false;

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            access = true;
        }
    })
    res.json({access});

}

module.exports = login; 