const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require('../db/index');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    // Check if the username and id are present in the database
    try {
        // Check if the username is already present in the database
        const userExists = await Admin.findOne({ username });
        if (userExists) {
            return res.status(403).json({
                msg: "Admin already exists",
            });
        }

        // Create a new admin user
        const newUser = await Admin.create({ username, password });

        // Send a success response
        res.status(200).json({
            msg: "Admin created successfully",
        });
    } catch (err) {
        res.status(500).json({
            msg: "Error creating admin",
        });

    }
});

router.post('/signin', async (req, res) => {

    const { username, password } = req.body;
    try {
        const user = await Admin.findOne({
            username,
            password,
        });
        if (user) {
            // Create a token
            const token = jwt.sign({ username: username }, JWT_SECRET);
            res.status(200).json({
                msg: "Signin successful",
                token,
            });
        }
        else {
            res.status(403).json({
                msg: "User does not exist",

            });
        }
    } catch (err) {
        res.status(500).json({
            msg: "Error Signing admin",
        });

    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
    });
    res.status(200).json({
        msg: "Course created successfully",
        courseId: newCourse._id,
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.status(200).json({
        courses: response,
    });

});


module.exports = router;