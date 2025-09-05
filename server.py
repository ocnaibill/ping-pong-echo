import socket

# Define o host como localhost e a porta
HOST = "0.0.0.0" # Aceita conexões de qualquer interface, permitindo conexão LAN
PORT = 65432 # Porta escolhida aleatóriamente para o projeto

# Cria o socket do servidor
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    # Vincula o socket ao endereço e porta
    s.bind((HOST, PORT))
    # Coloca o servidor em modo de escuta
    s.listen()
    print(f"Servidor escutando em {HOST}:{PORT}")

    # Aceita uma nova conexão
    conn, addr = s.accept()

    # O with garante que a conexão será fechada ao final
    with conn:
        print(f"Conectado por {addr}")
        while True:
            # Espera por dados do cliente (até 1024 bytes)
            data = conn.recv(1024)
            # Se não receber dados, o cliente desconectou
            if not data:
                print(f"Cliente {addr} desconectou.")
                break

            # 1. Decodifica a mensagem de bytes para string usando UTF-8
            #    O .strip() remove espaços em branco e o '\n' do final
            mensagem_cliente = data.decode('utf-8').strip()
            print(f"Recebido: '{mensagem_cliente}'")

            # 2. Verifica a condição de encerramento
            if mensagem_cliente == 'QUIT':
                print(f"Comando QUIT recebido. Encerrando conexão com {addr}.")
                break

            # 3. Envia a mesma mensagem de volta para o cliente.
            #    A mensagem original em bytes (data) é devolvida.
            #    Isso garante que ela seja "exatamente como recebida".
            conn.sendall(data)

print("Servidor encerrado.")