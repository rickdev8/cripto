import express from 'express'
import cors from 'cors'
import User from './UserRoute.js'

const routes = (app) => {
    app.use(cors())
    app.use(express.json(), User)
}

export default routes
