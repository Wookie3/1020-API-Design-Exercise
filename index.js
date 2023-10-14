import express from 'express'
import courseRouter from "./routes/courses.js"
import studentRouter from "./routes/students.js"
import enrollmentRouter from "./routes/enrollments.js"

import authRouter, { verifyPassword } from './auth.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/login', authRouter)
app.use('/', verifyPassword)
app.use('/courses', courseRouter)
app.use('/students', studentRouter)
app.use('/enrollment', enrollmentRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
