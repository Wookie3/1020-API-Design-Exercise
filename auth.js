export const verifyPassword = (req, res, next) => {
    const password = req.body.Password
    const token = parseInt(req.headers['authorization'])
    console.log(token)
    if (req.method === 'GET') {
        return next();
    }
    if (!(token === 12345)) {
        return res.status(400).send('bad request (token)')
    }
    console.log(req.method)
    next();
    }
