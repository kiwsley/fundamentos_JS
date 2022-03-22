const cliente ={
    nome:"kiwsley",
    idade: 25,
    cpf:123456,
    email: "kiwsley@gmail.com"
}

const chaves=["nome", "idade", "cpf","email"]

console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))