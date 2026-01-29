const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Servir arquivos estáticos (HTML, CSS, JS, Imagens)
app.use(express.static(path.join(__dirname)));

// Rota para receber dados do formulário (Simulação)
app.post('/api/demo', (req, res) => {
    const { nome, email, empresa } = req.body;
    console.log(`Nova solicitação de demo recebida: ${nome} (${email}) - ${empresa}`);
    
    res.status(200).json({ message: 'Solicitação recebida com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});