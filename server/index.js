import express from "express";
import cors from 'cors'
import { globalRouter } from "./features/global.router";

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    console.log(req.query)
    console.log(req.headers)
    
    res.json({ message: 'Hello World' })
})

app.use('/api', globalRouter)

app.listen(8080, () => {
    console.log('Server listening on: http://localhost:8080')
})
