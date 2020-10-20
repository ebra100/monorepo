const express = require('express')
const app = express()
const cors = require("cors")
const port = 3001
const moviesRoutes  = require('./routes/movies/moviesRoutes')

app.use(cors());

app.use("/movies" , moviesRoutes)

let poster = "https://images-na.ssl-images-amazon.com/images/I/51emHSy2djL._AC_.jpg"

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})