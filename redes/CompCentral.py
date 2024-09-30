Idcard = 1234567
SenhaCard = 102030
SaldoIni = float(1000.234)
depositar = 0

def verificarIdSenha(Id, senha):
    while Id != Idcard or SenhaCard != senha:
        Id = int(input("Digite o ID para verificação: "))
        senha = int(input("Digite a Senha para verificação: "))
    return "ID e senha verificados com sucesso!"

def SaldoClient():
    return SaldoIni
def DepositarDin (depositar, saldo_atual):
    saldo_atual +=depositar
    return "{:.2f} depositado com sucesso, seu saldo agora é {:.2f}".format(depositar,saldo_atual), saldo_atual
def SacarDinheiro(saque, saldo_atual):
    if saque > saldo_atual:
        return "Saque solicitado maior que o valor disponível em conta!", saldo_atual
    elif saque <= saldo_atual:
        saldo_atual -= saque
        return "Saque realizado com sucesso! Seu saldo agora é {:.2f}".format(saldo_atual), saldo_atual
