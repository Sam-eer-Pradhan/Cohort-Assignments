const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username: username });
        if (userExists) {
            res.status(403).json({
                message: "User already Exists",
            })
        }
        else {
            const newUser = await User.create({
                username: username,
                password: password,
            })

            res.status(200).json({
                message: "User Created Successfully",
            })
        }
    }
    catch (err) {
        res.status(403).json({
            message: "Error Creating User",
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username: username, password: password });
        if (userExists) {

            token = jwt.sign({ username }, JWT_SECRET);
            res.status(200).json({
                message: "Signin Successful",
                token,
            })
        }
        else {
            res.status(403).json({
                message: "User doesnt Exist",
            });

        }
    }
    catch (err) {
        res.status(500).json({
            msg: "Error Signing User",
        });

    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const course = await Course.find({});
        res.status(200).json({
            courses: course,
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Error Listing Courses"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
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
    try {
        const user = await User.findOne({ username: req.username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        const courses = await Course.find({
            _id: {
                $in: user.purchasedCourses
            }
        });

        res.status(200).json({ courses });

    } catch (err) {
        res.status(500).json({
            message: "Error fetching purchased courses"
        });
    }
});

module.exports = router