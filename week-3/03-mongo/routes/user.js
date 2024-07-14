const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    try {
        const newUser = await User.create({
            username: username,
            password: password,
        });
        res.status(200).json({
            msg: "User created successfully",
        });
    } catch (err) {
        res.status(500).json({
            msg: "Error creating user",
        });
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then((value) => {
            res.status(200).json({
                courses: value,
            });
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Error fetching courses",
            });
        });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username,
    }, {
        $push: {
            purchasedCourses: courseId,
        }
    })
        .then((value) => {
            res.status(200).json({
                msg: "Course purchased successfully",
            });
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Error purchasing course",
            });
        });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = await User.findOne({
            username: req.headers.username,
        })
        const courses = await Course.find({
            _id: {
                $in: user.purchasedCourses,
            }
        })
        res.status(200).json({
            courses: courses,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Error fetching purchased courses",
        });
    }

});

module.exports = router