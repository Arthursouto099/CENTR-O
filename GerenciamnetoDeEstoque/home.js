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


createEmpresa()
console.log(empresas)



function readEmpresa() {
    empresas.forEach(e => console.log(`NomeDaEmpresa: ${e.nomeDaEmpresa}, StatusDaEmpresa: ${e.status}`))
}

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


readEmpresaEstoque()

function updateEmpresa() {
    const propriedades = rl.question("digite o nome da propriedade da {EMPRESA QUE VOCÊ DESEJA ALTERAL}   nomeDaEmpresa/Status ")
    
}