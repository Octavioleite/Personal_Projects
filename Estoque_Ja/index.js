const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./src/db');
const homeRouter = require('./src/routes/homeRouter');
const casdra_prodRouter = require('./src/routes/casdra_prodRouter');

const app = express();

// Configuração do motor de templates Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // Adicionado para suportar JSON

// Configuração da sessão
app.use(session({
    secret: 'secreta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Considerar `true` se estiver usando HTTPS
}));

// Configuração de arquivos estáticos
app.use(express.static('public'));

// Configuração das rotas
app.use('/', homeRouter);
app.use('/', casdra_prodRouter);

// Sincronização com o banco de dados e inicialização do servidor
db.sync()
  .then(() => {
    console.log('Banco de dados conectado');
    const PORT = process.env.PORT || 8080; 
    app.listen(PORT, () => {
      console.log('Aplicativo em execução na porta ' + PORT);
    });
  })
  .catch(error => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
