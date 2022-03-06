
///declaração de função

// function minhaFuncao(param){

// }

// minhaFuncao("paremetro")


// expressão de função


// diferença principal: hoisting
//funções e var são listadaqs no topo

console.log(apresentar())

function apresentar(){
    return "olá";
}


const soma = function(num1, num2){return num1+num2}
console.log(soma(1,1))