# Entregavel03-Software
Terceiro entregável da disciplina de Ambiente e Desenvolvimento de software 
<hr>

### Criar um novo projeto

1. Crie uma pasta chamada `site-soma`. 
2. Abra essa nova pasta no Visual Studio Code (Arquivo > Abrir e selecione a pasta). 
3. Em seguida, abra o terminal e execute o comando a seguir `npm init -y` para criar um novo **projeto NPM**.

### Instalar o Express

No terminal do Visual Studio Code, execute o comando para instalar o **Express** `npm install express`.

### Criar servidor

Com o **Express** instalado, deve-se criar um servidor. 

1. Crie primeiro um arquivo chamado `app.js` 
2. Copie o código a seguir nele:

```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
```
<hr>
## No terminal do Vs Code, execute o comando `node app.js`
## Abra o seu navegador na url [http://localhost:3001](http://localhost:3001).

### Criar uma requisição POST

Copie e cole no arquivo que foi criado recente esse código: 
```javascript
app.post('/soma', function (req, res) {
  res.send('Response da requisição POST');
});
```
### Consumir dados do POST

1. Instale a biblioteca `body-parser`. Essa biblioteca nos ajuda a fazer a leitura dos dados via POST 

2. Para instalar, execute o comando `npm install body-parser` no terminal do Visual Studio Code.

3. Logo após a declaração da variável `app`, cole o código a seguir:

```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.json());
```

4. Em seguida, no corpo da função `post`, cole o seguinte código:

```javascript
var body = req.body;
console.log(body);
res.send('via post');
```

Pronto :) 

Salve o arquivo, execute `npm app.js` no terminal! Isso faz com ele execute.

### Criando uma função soma

+ Veja a função soma a seguir e como integrar ela em seu site. 

```javascript
function soma(a, b) {
  return a + b;
}
```

Copie e cole essa função para o arquivo `app.js` e em seguida substitua o código a seguir no corpo da função `post`.

```javascript
var body = req.body;
var resultado = soma(body.a, body.b);

res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
```
### Para criar as outras funções de subtração, divisão e multiplicação, basta se basear em como foi feito a função soma :)
### Indo para o POSTMAN testar verificar o código:
1. Depois de já ter executado a porta no terminal do vs code
2. Vá para o postman e rode a porta http://localhost:3001/ e clique em "send". Assim como na imagem abaixo: 
![image](https://github.com/bea-brito/Entregavel03-Software/assets/110315709/9373872d-f27c-41aa-9b9c-dfe5dc420c66)
3. Depois teste cada um dessa forma:
![image](https://github.com/bea-brito/Entregavel03-Software/assets/110315709/8ead8dbb-3ecd-4186-bf7e-c3c42ed49a79)
