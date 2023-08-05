import app from './app';
const porta = 3001;
app.listen(porta, () => {
    console.log('-----------------------------------------');
    console.log(`Servidor iniciado na porta ${porta}`);
    console.log(`Acesse: http://localhost:${porta}`);
});