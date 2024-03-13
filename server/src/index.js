import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { globalRouter } from './features/global.router.js'

const app = express()
app.use(cors())
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
