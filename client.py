import socket

# Define o host e a porta do servidor
HOST = "127.0.0.1" # IP localhost da máquina (Mudar caso o server não esteja na mesma máquina que o cliente)
PORT = 65432 # Porta escolhida aleatóriamente para o projeto

# Cria o socket do cliente
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    # Tenta se conectar ao servidor
    s.connect((HOST, PORT))
    print(f"Conectado ao servidor em {HOST}:{PORT}. Digite 'QUIT' para sair.")

    while True:
        # Pede ao usuário para digitar uma mensagem
        msg = input("Por favor, digite sua mensagem: ")

        # 1. Garante que a mensagem seja enviada com '\n' e codificada em UTF-8
        #    Isso estabelece o protocolo combinado.
        s.sendall(f"{msg}\n".encode('utf-8'))

        # 2. Verifica se o usuário quer encerrar a sessão
        if msg == 'QUIT':
            print("Encerrando a conexão.")
            break

        # Espera pela resposta do servidor (eco)
        data = s.recv(1024)

        # 3. Decodifica a resposta para exibir corretamente (com acentos)
        #    O .strip() remove o '\n' que o servidor enviou de volta.
        resposta_servidor = data.decode('utf-8').strip()
        print(f"Resposta do servidor: '{resposta_servidor}'")

print("Cliente desconectado.")  