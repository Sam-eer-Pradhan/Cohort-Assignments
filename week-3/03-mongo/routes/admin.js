const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index');
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password,
    }).then((value) => {
        res.status(200).json({
            msg: "Admin created successfully",
        });
    })
        .catch((err) => {
            res.status(500).json({
                msg: "Error creating admin",
            });
        });
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

