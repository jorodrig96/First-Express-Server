const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is the route for your home page.</h1> <img src="https://media.istockphoto.com/id/1312128591/vector/home-icon-vector-house-sign.jpg?s=612x612&w=0&k=20&c=jxUT546g8Cfgv1SiAfh2Eos46XI3DqYvPLhxGFaobpE=" alt="home page picture">')
    res.end()
})

app.get('/randompage', (req, res) => {
    res.send('<h1>This is a practice route for something else other than a home path.</h1> <img src="https://cms.hybrid.co.id/wp-content/uploads/2022/12/ebdbb5ec877fd791f6b8c23085d2c48c_y00ts.jpg" alt="random picture">')
})

app.listen(3000, ()=>{
    console.log('you have been connected.')
})