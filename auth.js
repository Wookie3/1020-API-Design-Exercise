import jwt from 'jsonwebtoken'
import express from 'express'
// import students from './data.js'
import dotenv from 'dotenv'
dotenv.config();
const router = express.Router()

export const verifyPassword = (req, res, next) => {
    const password = req.body.Password
    const token = parseInt(req.headers['authorization'])
    console.log(token)
    if (req.method === 'GET') {
        return next();
    }
    if (!(token === 12345)) {
        return res.status(401).send('unauthorized (token)')
    }
    console.log(req.method)
    next();
    }

router.post('/login', (req, res) => {
    const studentId = req.body.Student_ID
    const token = jwt.sign({studentId}, precess.env.KEY, {expiresIn: '1m'})
    return res.json({token})
})

export default router