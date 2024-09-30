import CompCentral

print("Conectando ao computador central...")
print("Status: Conectado")

Id = 0
senha = 0
opcao = 0
saque = 0
saldo_atual = CompCentral.SaldoIni
depositar = 0

print(CompCentral.verificarIdSenha(Id, senha))

while opcao != 4:
    opcao = int(input("1 - Verificar Saldo\n2 - Sacar\n3 - Depositar\n4 - Sair\n: "))
    
    if opcao == 1:
        print(f"Seu saldo atual é: R$ {saldo_atual:.2f}")
    
    elif opcao == 2:
        saque = float(input("Digite o valor que deseja sacar: "))
        mensagem, saldo_atual = CompCentral.SacarDinheiro(saque, saldo_atual)
        print(mensagem)
    
    elif opcao == 3:
        depositar = float(input("Digite o valor que gostaria de depositar: "))
        mensagem, saldo_atual = CompCentral.DepositarDin(depositar, saldo_atual)
        print(mensagem)
    elif opcao == 4:
        print("Saindo...")
        break
    
    else:
        print("Opção errada, escolha uma das três opções.")
