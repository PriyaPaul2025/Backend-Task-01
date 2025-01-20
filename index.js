const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) =>{
    res.send('hello world');
});

app.get('/name/:name', (req, res) => {
    const name = req.params.name;
    res.send(`hello, ${name}!`);
});


app.post('/echo',(req, res)=>{
    console.log(req.body);
    const data = req.body;
    res.json(data);
})
app.listen(3000, ()=>{
    console.log('hie');
})
