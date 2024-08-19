const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()


app.use(cors())
app.use(bodyParser.json())


const series = []


app.get('/series', (req, res) => {
  res.status(200).json(series)
});

app.post('/series', (req, res) => {
  const serie = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  series.push(serie);  
  res.status(201).json(serie);
});


app.listen(3333, console.log('Meu servidor está rodando na porta 3333!'))