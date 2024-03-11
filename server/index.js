import express from "express";
import cors from 'cors'
import { featureTestRouter } from "./features/test/test.routes.js";

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    console.log(req.query)
    console.log(req.headers)
    
    res.json({ message: 'Hello World' })
})

// ici on enregistre les routes de features/test/test.routes.js importé plus haut
// featureTestRouter est une fonction à laquelle on passera l'instance de notre application express
featureTestRouter(app)

app.listen(8080, () => {
    console.log('Server listening on: http://localhost:8080')
})
