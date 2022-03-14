//401: Authentication error
//403: Forbidden
//Check the header of Postman to verify the token key "Bearer ...""

const jwt = require('jsonwebtoken');
require('dotenv').config();

function verify(req, res, next) {
    const authHeader = req.headers.token;
    
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
            if (error) {
                res.status(403).json("Invalid token");
            } else {
                req.user = user;
                next();
            }
        })
    } else {
        return res.status(401).json("Acess denied");
    }
}

module.exports = verify;