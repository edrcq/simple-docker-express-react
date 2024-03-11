import { Router } from "express";


/**
 * 
 * @param {import("express").Application} app 
 */
export const featureTestRouter = (app) => {
    app.get('/test', (req, res) => {
        res.json({ test: 'OK' })
    })
    
    app.get('/test/:id', (req, res) => {
        console.log(req.params, { id: req.params.id })
        res.json({ id: req.params.id })
    })
}
