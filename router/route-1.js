import express from 'express'

import { home } from '../controllers/home.js'

const routes = express.Router()

routes.get('/', home)

export default routes