console.log('Hello world')

const n1 = 2
const n2 = 4
const soma = n1 + n2

console.log('Soma: ', soma)

console.log('---------------------------------')

console.log('Multiplicação: ', mult(2, 5))

function mult(v1, v2) {
    return v1 * v2
}

console.log('---------------------------------')

const div = (v1, v2) => {
    return v1 / v2
}

console.log('Divisao: ', div(8, 4))

console.log('---------------------------------')

const aviso = () => {
    return new Promise((resolve, reject) => {
        if(err) {
            reject(err)
        }
        else {
            resolve()
        }
    })
}

const fs = require('fs')

const ler = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile("data_nok.txt", 'data', (err) => {
            if(err) {
                reject('File wasnt created')
            }
            else{
                resolve('File create')
            }
        })
    })
}
ler()

const calc = require('./calc')
console.log('Soma: ', calc.soma(2, 4))
console.log('Div: ', calc.div(4, 2))
console.log('Mult: ', calc.mult(2, 2))
console.log('Sub: ', calc.sub(4, 3))