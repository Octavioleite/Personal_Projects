Word = input("Digite a palavra a qual deseja verificar o N de a's: ")
cont = int(0)
Word = Word.lower()

for i in Word:
    if 'a' in i:
        cont +=1

print("Foram encontrados {} a's".format(cont))