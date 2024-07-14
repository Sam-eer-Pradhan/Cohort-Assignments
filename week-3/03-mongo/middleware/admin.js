// Middleware for handling auth
const { Admin } = require('../db/index');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected   
    const username = req.headers.username;
    const password = req.headers.password;
    const findAdmin = await Admin.findOne({
        username: username,
        password: password,
    });
    if (findAdmin) {
        next();
    }
    else {
        res.status(403).json({
            msg: "User does not exist",
        });
    }


}



module.exports = adminMiddleware;