const rl = require("readline-sync")
const empresaModel = {nomeDaEmpresa: "", status: false, estoque: []}
const empresas = [{nomeDaEmpresa: "casas bahia", status: true, estoque: [{nomeDoproduto: 'FontFace', quantidadeDoProduto: 1000, fornecedor: "casas"}]}]




function createEmpresa() {
const nomeDaEmpresa = rl.question("Digite o nome da sua empresa: ")
const empresa = {...empresaModel, nomeDaEmpresa: nomeDaEmpresa}
empresas.push(empresa)
const statusTrueOuFalse = String(rl.question("Você deseja ativar seu estoque? sim/nao: ")).toLowerCase()
if(statusTrueOuFalse === "sim") {
    empresa.status = true
    while(true) {
    console.log("Área de cadastro de produtos\n")
    rl.question("Digite qualquer tecla para iniciar o cadastro...")
    
    const nomeDoproduto = Number(rl.question("Digite o nome do produto: "))
    const quantidadeDoProduto = Number(rl.question("Digite a quantidade do produto: "))
    const fornecedorDoProduto = rl.question("Digite o nome do fornecedor do produto: \n")

    const newProduto = {nomeDoproduto: nomeDoproduto, quantidadeDoProduto: quantidadeDoProduto, fornecedorDoProduto: fornecedorDoProduto}
    empresa.estoque.push(newProduto)
    
    const statusDoWhile = rl.question("Deseja parar? ")
    if(statusDoWhile.toLowerCase() === "sim") break
    console.clear()
        
    }
}

}






function createProdutoEstoque() {
    const nomeDaEmpresa = rl.question("Digite o nome da empresa, qual voce quer ter acesso ao estoque: ") 
    let ep = undefined
    const procurarEmpresa = () => {
     for(let i = 0; i < empresas.length; i ++) {
         if(empresas[i].nomeDaEmpresa === nomeDaEmpresa) {
             ep = empresas[i]
         }
     }
    }
 
    procurarEmpresa()
    while(true) {
        console.log(`Você entrou no estoque da empresa: ${ep.nomeDaEmpresa}: `)
        console.table(ep.estoque)

        const nome = rl.question("Digite o nome do produto: ")
        const quantidade = Number(rl.question("Digite a qunatidade do produto: "))
        const fornecedor = rl.question("Digite o forncedor do produto: ")

        const newObj = {nomeDoproduto: nome, quantidade: quantidade, fornecedor: fornecedor}
        ep.estoque.push(newObj)

        const newQuestionStop = rl.question("você deseja continuar? s/n")

        if(newQuestionStop === "n") {
            break
        }
        
    }
   
}





function readEmpresa() {
    empresas.forEach(e => console.log(`NomeDaEmpresa: ${e.nomeDaEmpresa}, StatusDaEmpresa: ${e.status}`))
}

readEmpresa()

function readEmpresaEstoque() {
   const nomeDaEmpresa = rl.question("Digite o nome da empresa, qual voce quer ter acesso ao estoque: ") 
   let ep = undefined
   const procurarEmpresa = () => {
    for(let i = 0; i < empresas.length; i ++) {
        if(empresas[i].nomeDaEmpresa === nomeDaEmpresa) {
            ep = empresas[i]
        }
    }
   }

   procurarEmpresa()

   console.log(ep)
}




function updateEmpresa() {

    const nomeDaEmpresa = rl.question("Digite o nome da empresa que você deseja alterar as propriedades nomeDaEmpresa/Status  ") 
    let ep = undefined
    const procurarEmpresa = () => {
     for(let i = 0; i < empresas.length; i ++) {
         if(empresas[i].nomeDaEmpresa === nomeDaEmpresa) {
             ep = empresas[i]
         }
     }
    }

    procurarEmpresa()

    console.log(ep)
    
    while(true) {
        const propriedades = rl.question("digite o nome da propriedade da {EMPRESA QUE VOCÊ DESEJA ALTERAL}   nomeDaEmpresa/Status ")

        if(propriedades === "nomeDaEmpresa") {
            const newName = rl.question("Diga o novo nome da empresa:  ")
            ep.nomeDaEmpresa = newName 
            console.log(ep)
        }
    
        else if(propriedades === "Status") {
            if(ep.status === false) {
                ep.status = true
                
             } 
             else {
                ep.status = false
             }

             console.log(ep)
        }

        const newQuestionStop = rl.question("você deseja continuar? s/n")

        if(newQuestionStop === "n") {
            break
        }
    }
   

    console.log(ep)
    
}




function updateEstoqueEmpresa() {
    const nomeDaEmpresa = rl.question("Digite o nome da empresa, qual voce quer ter acesso ao estoque: ") 
   let ep = undefined
   const procurarEmpresa = () => {
    for(let i = 0; i < empresas.length; i ++) {
        if(empresas[i].nomeDaEmpresa === nomeDaEmpresa) {
            ep = empresas[i]
        }
    }
   }





   while(true) {
    console.log(`Você entrou no estoque da empresa: ${ep.nomeDaEmpresa}: `)
    console.table(ep.estoque)
    const indice = Number(rl.question("Digite o indice do produto: "))
    const propriedade = rl.question("Digite a propridade que você deseja mudar, referente ao produto do indice " + indice + " nome/quantidade/fornecedor")

    if(propriedade === "nome") {
        const newNameProduct = rl.question("Digite o novo nome do produto: ")
        ep.estoque[indice].nomeDoproduto = newNameProduct
        console.log(ep.estoque[indice])
    }

    else if(propriedade === "quantidade") {
        const newQtd = Number(rl.question("Digite a nova quantidade do produto: "))
        ep.estoque[indice].quantidadeDoProduto = newQtd
        console.log(ep.estoque[indice])
    }


    else {
        const fornecedor = rl.question("Digite o nome do novo fornecdor: ")
        ep.estoque[indice].fornecedor = fornecedor
        console.log(ep.estoque[indice])
    }

    const newQuestionStop = rl.question("você deseja continuar? s/n")

        if(newQuestionStop === "n") {
            break
        }

   }
}



function deleteEmpresa() {
    const nomeEmpresaDelete = rl.question("Digite o nome da empresa que deseja apagar: ")
    let ep = undefined
    for(let empresa of empresas) {
        if(empresa.nomeDaEmpresa === nomeEmpresaDelete) {
            ep = empresa
            const index = empresas.indexOf(ep)
            empresas.splice(index, 1) 
        }
    }

    console.log(empresas)
}


function deleteProdutoEstoque() {
    const nomeDaEmpresa = rl.question("Digite o nome da empresa que você deseja acessar o estoque:   ") 
    let ep = undefined
    const procurarEmpresa = () => {
     for(let i = 0; i < empresas.length; i ++) {
         if(empresas[i].nomeDaEmpresa === nomeDaEmpresa) {
             ep = empresas[i]
         }
     }
    }

    procurarEmpresa()
    while(true) {
        console.log(`Você entrou no estoque da empresa: ${ep.nomeDaEmpresa}: `)
        console.table(ep.estoque)
        const indice = Number(rl.question("Digite o indice do produto: "))
        ep.estoque.splice(indice, 1)
        
        const newQuestionStop = rl.question("você deseja continuar? s/n")

        if(newQuestionStop === "n") {
            break
        }
    }



    
}

