import express from 'express'
import cors from 'cors'
import session from 'express-session'
import { globalRouter } from './features/global.router.js'

export function initWebServer() {
    const app = express()
    app.use(cors({
        origin: (origin, cb) => {
            cb(null, true)
        },
        credentials: true,
    }));
    
    app.use(session({
        cookie: { maxAge: 60000 },
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
    }))

    app.use(express.json())

    app.get('/', (req, res) => {
        console.log(req.query)
        console.log(req.headers)
        
        res.json({ message: 'Hello World' })
    })

    app.use('/api', globalRouter)

    app.listen(8080, () => {
        console.log('Server listening on: http://localhost:8080')
    })
    
    return app;
}

