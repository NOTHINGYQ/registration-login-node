/*
the JWT checks that the jwt token received in the http request from the client is valid before allowing access to the api.
if the token is invalid a '401 Unauthorized' response is sent to the client.
 */
const expressJwt = require('express-jwt');
// const config = require('config.json');
const userService = require('../../controller/user');
// const {config} = require("dotenv");

function jwt(){
    const secret = process.env.SECRET;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done){
    const user = await userService.getById(payload.sub);

    //revoke token if user no longer exists
    if(!user){
        return done(null, true);
    }
    done();
};

module.exports = jwt;