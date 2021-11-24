const express = require('express')
const giveAwayRoutes = require('./routes/giveAwayRoutes')

const app = express()
const port = 5000

app.use('/api',giveAwayRoutes)

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

