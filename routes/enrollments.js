import express, { Router } from "express"
import { students, courses, enrollments } from "../data.js";

const router = express.Router()


router.get('/', (req, res) => {
    res.json(enrollments)
})

router.patch('/:studentId', (req, res) => {
    const studentId = req.params.studentId
    const courseId = req.body.Course_Id


    const index = enrollments.findIndex(e => e.Student_ID == studentId)
    if (index === -1) {
        return res.status(404).send('Student not found.')
    }
    const enrollment = enrollments[index]
    if (enrollment.Courses.includes(courseId)) {
        return res.status(400).send('Already enrolled in this course.')
    }
    if (!courses.map(c => c.Course_Id).includes(courseId)) {
        return res.status(404).send('course not found')
    }

    enrollment.Courses.push(courseId)
    console.log(studentId, courseId)

    return res.status(200).send(enrollment)
})

router.delete('/:studentId', (req, res) => {
    const studentId = req.params.studentId
    const courseId = req.body.Course_Id

    const index = enrollments.findIndex(e => e.Student_ID == studentId)
    if (index === -1) {
        return res.status(404).send('Student not found.')
    }
    const enrollment = enrollments[index]
    if (!enrollment.Courses.includes(courseId)) {
        return res.status(400).send('Not enrolled in this course.')
    }
    if (!courses.map(c => c.Course_Id).includes(courseId)) {
        return res.status(404).send('not found')
    }
    const courseIndex = enrollment.Courses.findIndex(c => c === courseId)
    enrollment.Courses.splice(courseIndex, 1)
    return res.status(204).send('Deleted')
})

router.get('/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId)
    const studentsEnrolled = []
    enrollments.forEach(e => {
       if (e.Courses.includes(courseId)) {
        studentsEnrolled.push(e.Student_ID)
       }
    }
    )
    return res.status(200).send(studentsEnrolled)
})

export default router;

