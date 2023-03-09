import express from 'express';
import routes from './router/route-1.js';

const app = express()

app.use('/', routes)


// Config express
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server on in port: " + port )
})
