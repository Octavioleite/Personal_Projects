init = 0
initt = 1
fibo = [init, initt]

quantidade = int(input("Digite a quantidade: "))

for i in range(2, quantidade):
    proximo = fibo[i-1] + fibo[i-2]
    fibo.append(proximo)


SearchNumber = int(input("Digite o número que deseja procurar: "))

if SearchNumber in fibo:
    SearchStatus = 'pertence'
else:
    SearchStatus = 'não pertence'
print(fibo, "\n")
print(f'O número {SearchNumber} {SearchStatus} à sequência de Fibonacci.')
