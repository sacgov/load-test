const express = require('express')
const app = express()
const port = 3000
app.get('/check', (req, res) => {
    res.send('check received')
})
app.get('/timer/:token', (req, res) => {
    let timeout = Number(req.params.token)
    console.log(timeout)
    setTimeout(()=>{
        res.send("result")
    },timeout)
})
app.listen(port, () => {
    console.log(`slow app listening at http://localhost:${port}`)
})
