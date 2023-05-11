var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});
var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

// postman soma
app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});
function soma(a, b) {
  return a + b;
}

// postman subtração 
app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});
function subtracao(a, b) {
  return a - b;
}

// postman multiplicação
app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});
function multiplicacao(a, b) {
  return a * b;
}
// postman divisao
app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});
function divisao(a, b) {
  return a / b;
}
