// server/index.js

// Importa o módulo 'net' nativo do Node.js, que fornece a funcionalidade de rede TCP.
import net from 'net';

// Define o host e a porta, assim como no exemplo Python.
const HOST = '0.0.0.0'; // Aceita conexões de qualquer interface de rede.
const PORT = 65432;     // Porta que o servidor irá escutar.

// Cria um novo servidor TCP. A função passada como argumento é um "listener"
// que será executado toda vez que um novo cliente se conectar.
const server = net.createServer((socket) => {
    // 'socket' é o objeto que representa a conexão com o cliente recém-conectado.

    // Obtém o endereço e a porta do cliente para log.
    const clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`Nova conexão de ${clientAddress}`);

    // Envia uma mensagem de boas-vindas ao cliente, assim que ele se conecta.
    // A mensagem é enviada como uma string codificada em 'utf-8'.
    socket.write('Conexão estabelecida. Bem-vindo!\n');

    // Adiciona um "listener" para o evento 'data'.
    // Este evento é disparado sempre que o servidor recebe dados do cliente.
    socket.on('data', (data) => {
        // 'data' é um Buffer. Convertemos para string para poder ler.
        const message = data.toString('utf-8').trim();
        console.log(`Recebido de ${clientAddress}: '${message}'`);

        // Verifica se o cliente quer desconectar.
        if (message.toUpperCase() === 'QUIT') {
            console.log(`Comando QUIT recebido de ${clientAddress}. Encerrando conexão.`);
            socket.end(); // Fecha a conexão de forma graciosa.
            return;
        }

        // Envia a mesma mensagem de volta para o cliente (servidor de eco).
        socket.write(`Eco: ${message}\n`);
    });

    // Adiciona um "listener" para o evento 'end'.
    // Este evento é disparado quando o cliente fecha a conexão (por exemplo, com socket.end()).
    socket.on('end', () => {
        console.log(`Conexão com ${clientAddress} encerrada pelo cliente.`);
    });

    // Adiciona um "listener" para o evento 'error'.
    // Essencial para evitar que o servidor quebre se um cliente desconectar abruptamente.
    socket.on('error', (err) => {
        // O erro "ECONNRESET" acontece quando o cliente fecha a conexão de forma inesperada.
        if (err.code === 'ECONNRESET') {
            console.log(`Cliente ${clientAddress} desconectou inesperadamente.`);
        } else {
            console.error(`Erro na conexão com ${clientAddress}: ${err.message}`);
        }
    });
});

// Faz o servidor começar a "escutar" por conexões na porta e host definidos.
server.listen(PORT, HOST, () => {
    console.log(`Servidor TCP escutando em ${HOST}:${PORT}`);
});