// Middleware for handling auth
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin
    const token = req.headers.authorization;
    try {
        if (!token) {
            return res.status(403).json({
                msg: "No token provided",
            });
        }

        const splitToken = token.split(" ");
        if (splitToken[0] !== 'Bearer' || !splitToken[1]) {
            return res.status(403).json({
                msg: "Malformed token",
            });
        }

        const jwtToken = splitToken[1];
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        if (decoded.username) {
            next();
        }
        else {
            res.status(403).json({
                msg: "User does not exist",
            });
        }
    }
    catch (err) {
        // Differentiate between expired token and other JWT errors
        if (err.name === 'TokenExpiredError') {
            res.status(403).json({
                msg: "Token expired",
            });
        } else if (err.name === 'JsonWebTokenError') {
            res.status(403).json({
                msg: "Invalid token",
            });
        } else {
            res.status(403).json({
                msg: "User does not exist",
            });
        }
    }
}

module.exports = adminMiddleware;