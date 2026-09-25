import jwt from 'jsonwebtoken'


const userauth = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not authorized. Login again' })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDecode.id) {
            req.body.userID = tokenDecode.id
        }

        else {
            return res.json({ success: false, message: 'Not authorized. Login again' })
        }

        next();

    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export default userauth;