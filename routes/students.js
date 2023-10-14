import express from "express"
import { students, enrollments } from "../data.js";

const router = express.Router();

router.get('/', (req, res) =>{
    res.json(students)
})

router.post('/', (req, res) => {
    const studentId = students.length > 0 ? Math.max(...students.map(s => s.Student_ID)) + 1 : 1;
    const fisrtName = req.body.First_Name
    const lastName = req.body.Last_Name
    const setPassword = req.body.Password
    if (!fisrtName || !lastName || !setPassword) {
        return res.status(400).send("Bad Request, missing required field!")
    }
    const newStudent = {
    Student_ID: studentId,
    First_Name: fisrtName,
    Last_Name: lastName,
    Password: setPassword
    }
    students.push(newStudent)
    const newEnrollment = {
        Student_ID: studentId,
        Courses: []
    }
    enrollments.push(newEnrollment)
    res.status(200).send("New student added.")
})

router.delete('/:id', (req, res) => {
    const studentId = req.params.id
    const index = students.findIndex(s => s.Student_ID == studentId)
    if (index === -1) {
        return res.status(404).send("Student not found")
    }
    students.splice(index, 1)
    console.log(students)
    return res.status(204).send('Deleted.');
})

router.patch('/:id', (req, res) => {
    const studentId = req.params.id
    const index = students.findIndex(s => s.Student_ID == studentId)
    if (index === -1) {
        return res.status(404).send("Student not found")
    }
    const student = students[index]

    if (req.body.First_Name) {
        student.First_Name = req.body.First_Name
    }
    if (req.body.Last_Name) {
        student.Last_Name = req.body.Last_Name
    }
    return res.status(200).json(student)
})

export default router;