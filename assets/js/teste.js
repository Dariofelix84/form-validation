console.log("Bye")

let nome = "Dario"

console.log(nome)

nome = "Lucas"

console.log(nome)

const idade = 38

console.log(idade)



const valor1 = 10

const valor2 = 5

// + - * /
// Booleano - true OU false
// Number - 1 2 3 4.5
// INT - 12
// FLOAT - 1.2 10.5 178.67
// STRING - "Dario" 'Lucas' `Bianca`

const soma = valor1 + valor2
console.log(soma)

const Booleano = true

const number = 1

const int = 12

const float = 10.5

const string = "Lucas bêbê do Papai"

const valor3 = "1.5"

const valor4 = "7"

const valor1EmNumero = Number(valor3)

const valor2EmNumero = Number(valor4)
console.log(valor2EmNumero)

console.log(valor1, valor1EmNumero)

const total = valor1EmNumero + valor2EmNumero
console.log("Média",total)

const menssagem = "Média " + total 
console.log(menssagem)

// ===
// ==
// if ("1234" !== "123") {

// }

1 < 2 // verdade
1 < 0 // falso
1 > -2 // verdade
10 < 11 // verdade
20 > 19 // verdade
20 > 40 // falso
20 >= 20 // verdade
20 >= 22 // falso

// const objetoPessoa = {
//   nome: "Dario Felix",
//   idade: 48,
//   sexo: "Masculino",
// }

// objetoPessoa.idade

// const idade = objetoPessoa.idade 

// console.log(idade)

const numeros = [39, 38, 20, 60, 52]

numeros[0] // 39
numeros[2] // 20
numeros[3] // 60

console.log(numeros[0])

const notas = [8, 9, 2]

const aluno = {
  nome: "João da Silva",
  idade: 16,
  serie: "1º ano",
  notas: [
    { materia: "Matemática", nota: 5 },
    { materia: "Português", nota: 6 },
    { materia: "   Ciências     ", nota: 7 },
  ],
}

aluno.serie // "1º ano"

aluno.notas[0]
console.log(aluno.notas[0])

aluno.notas[0].nota
aluno.notas[2].materia.trim()

const materia = aluno.notas[2].materia.trim()

console.log("Matéria:", materia)

console.log("Matéria:", materia.replace("C", "D").replace("c", "d") + " HELLO")

// getComputedStyle(username) - pegar todos estilos que estão sendo aplicados em um elemento

function Somar(numero1, numero2) {
  const soma = numero1 + numero2

  console.log("A soma dos números é: " + soma + " " + "q" + "u" + "e" + " " + "l" + "e")
}

Somar(5, 2) // 7
Somar(8, 2) // 10
Somar(10, 11)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log("Esse aqui é o número:", numeros[0])
// console.log("Esse aqui é o número:", numeros[1])
// console.log("Esse aqui é o número:", numeros[2])
// console.log("Esse aqui é o número:", numeros[3])
// console.log("Esse aqui é o número:", numeros[4])
// console.log("Esse aqui é o número:", numeros[5])
// console.log("Esse aqui é o número:", numeros[6])
// console.log("Esse aqui é o número:", numeros[7])
// console.log("Esse aqui é o número:", numeros[8])
// console.log("Esse aqui é o número:", numeros[9])

for (const numero of numeros) {
  console.log("Esse aqui é o número:", numero)
}
