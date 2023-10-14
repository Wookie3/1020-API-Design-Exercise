import express from "express"
import { courses } from "../data.js";

const router = express.Router();


router.get('/', (req, res) =>{
    res.json(courses)
})
router.post('/', (req, res) => {
    const courseId = courses.length > 0 ? Math.max(...courses.map(course => course.Course_Id)) + 1 : 1;
    const courseCode = req.body.Course_Code
    const couseName = req.body.Course_Name
    const semester = req.body.Semester

    if (!courseCode || !couseName || !semester) {
        return res.status(400).send("Bad Request, missing required field!")
    }
    const newCourse = {
    Course_Id: courseId,
    Course_Code: courseCode,
    Course_Name:couseName,
    Semester: semester
    }
    courses.push(newCourse)
    res.status(200).send("New course added.")
})

router.delete('/:id', (req, res) => {
    const courseId = req.params.id
    const index = courses.findIndex(c => c.Course_Id == courseId)
    if (index === -1) {
        return res.status(404).send("Course not found")
    }
    courses.splice(index, 1)
    return res.status(204);
})

router.patch('/:id', (req, res) => {
    const courseId = req.params.id
    const index = courses.findIndex(c => c.Course_Id == courseId)
    if (index === -1) {
        return res.status(404).send("Course not found")
    }
    const course = courses[index]

    if (req.body.Course_Code) {
        course.Course_Code = req.body.Course_Code
    }
    if (req.body.Semester) {
        course.Semester = req.body.Semester
    }
    if (req.body.Course_Name) {
        course.Course_Name = req.body.Course_Name
    }
    return res.status(200).json(course)
})



export default router;