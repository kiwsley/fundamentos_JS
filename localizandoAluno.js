const alunos = ['kiwsley', 'banguela', 'Raiany', 'arya']

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

//include retorna booleano
//indexOf retorna um número
const exibeNomeNota = (nomeDosAlunos)=>{
    if(listaDeNotasEAlunos[0].includes(nomeDosAlunos)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDosAlunos)
        return listaDeNotasEAlunos[0][indice]+`sua média é ` + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não Cadastrado"
    }

}

console.log(exibeNomeNota("Kiwsley"))