const PORT = 3000
const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.json("welcome to docker test!!!")
})

app.listen(PORT ? PORT: 8080, ()=>{
    console.log(`server is running on port ${PORT}`)
})