function regraTres(x, y, z) {
    return x * y / z

}

console.log(regraTres(112, 70, 100))

const mult = regraTres(50, 40, 100)
console.log('O valor de mult é ' + mult)


function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log('Pode dirigir')
    } else {
        console.log('Não pode dirigir')
    }
}

console.log(podeDirigir(15, false))
console.log(podeDirigir(17, false))
console.log(podeDirigir(18, true))
console.log(podeDirigir(22, false))
console.log(podeDirigir(20, 1))



const saudacao = function (nome) {
    if (nome == 'Mauricio') {
        return 'Olá Mauricio'
    }
}

console.log(saudacao('Mauricio'))


function IMC(peso, altura) {
    return peso / (altura * altura)
// } if (IMC < 18, 5) {
//     console.log('Abaixo do Peso')
// } else if (IMC <= 24, 9) {
//     console.log('Peso Ideal')
// } else if (IMC <= 34, 9) {
//     console.log('Obesidade Grau 1')
// } else (IMC > 35)
//     console.log('Obesidade Severa ou Mórbida')
}

console.log(IMC(70,1.7))


