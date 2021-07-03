const express = require('express');
const app = express();
const http = require('http');

let points = []

for(let i = 0; i < 100; i ++){
    points.push({
        id: i,
        latitude: (Math.random() * 60) - 60,
        longitude: (Math.random() * 60) - 60

    })

}



app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/api/points', (req, res) => {
    res.send(points);
});

app.get('/api/points/:id', (req, res) => {
    const point = points.find(p => p.id === parseInt(req.params.id));
    if(! point) res.status(404).send("Point not found");
    res.send(point);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
