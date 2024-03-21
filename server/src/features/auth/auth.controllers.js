
export function getMe(req, res) {
    const id = req.session.userId
    res.json({
        message: 'get-me',
        userId: id,
    })
}

export function postRegister(req, res) {
    
    // CODE REGISTER
    
    res.json({
        message: 'register'
    })
}

export function postLogin(req, res) {
    // CODE
    // LOGIN
    
    // USER FOUND. Fake userId = 1
    req.session.userId = 1
    res.json({
        message: 'logged-in'
    })
}
