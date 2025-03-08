import express from 'express'
import User from "../controllers/UserController.js";

const route = express.Router()

route.get('/getUser/:email', User.getUser)
route.post('/postUser', User.postUser)

export default route