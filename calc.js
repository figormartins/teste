
const soma = (n1, n2) => {
    return n1 + n2
}

const mult = (n1, n2) => {
    return n1 * n2
}

const div = (n1, n2) => {
    return n1 / n2
}

const sub = (n1, n2) => {
    return n1 - n2
}

const percent = (n1, percent) => {
    return n1 / (percent / 100)
}

module.exports = {
    soma,
    mult,
    div,
    sub,
    percent
}
