export function validate(checker) {
    return (req, res, next) => {
        const result = checker(req.body)
        if (result === true) {
            return next()
        } else {
            res.status(400).json(result)
        }
    }
}
