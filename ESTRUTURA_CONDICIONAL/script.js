
// Estrutura IF
let idade = 18
if (idade == 18) {
    console.log('Você tem ' + idade + ' anos. Permitido entrar')
}

let peso = 50
let altura = 1.7
let total = peso / (altura * altura)

if (total > 20) {
    console.log('Seu IMC é de ' + total + '. Cuidado')
} else {
    console.log('Até que não está ruim')
}

let nome = 'Mauricio'
if (nome == 'Mauricio' && idade >= 18) {
    console.log('Ok')
}

let passaporte = true
if ((nome == 'Mauricio' && idade >= 18) || passaporte == true) {
    console.log('Liberado')
}

// Estrutura Else
let velocidade = 100
if (velocidade <= 80) {
    console.log('Não foi multado')
} else {
    console.log('Foi multado')
}

let velocidade2 = 50
if (velocidade2 <= 80) {
    console.log('Não foi multado')
} else {
    console.log('Foi multado')
}

// Praticando

let gender = 'Masculino'
if(gender == 'Feminino'){
    console.log('OK, vamos utilizar a Fórmula ALFA')

}else{
    console.log('Vamos Utilizar a fórmula BETA')
}

// Estutura Else if
let nome2 = 'Mauricio'
let idade2 = 35

if(nome != undefined && nome == 'Lucas'){
    console.log('O Nome está definido')
}else if(nome == 'Mauricio' && nome.length > 5 && idade2 == 35){
    console.log('O nome é Mauricio')
}else{
    console.log('Não é Mauricio')
}

