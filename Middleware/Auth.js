const Auth = (req, res, next) => {
    let role = req.headers.authorization
    
    if(role !== 'admin') return res.status(401).send('Auth Failed!')

    next()
}

module.exports = Auth 