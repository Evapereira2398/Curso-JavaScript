//Edição dos elementos do HTML
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

//Função para identificar se o número digitado atende os parâmetros (Entre 1 e 100)
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }
}

//Função para identificar se o número digitado já existe dentro da lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

//Função para adicionar os números digitados na lista utilizando uma array (váriavel "valores")
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) 
        //Criação de elemento para que os valores adicionados apareção visualmente na lista
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        //Comando utilizado para limpar o resultado caso o usuário já tenha finalizado e queria adicionar mais um número
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    //Comando utilizado para que após a adição de um número o campo fique limpo e selecionado novamente.
    num.value = ''
    num.focus()
}

//Função para realizar todas as operações depois que os valores forem adicionados.
function finalizar() {
    //Caso não seja adicionado nenhum valor na lista...
    if(valores.length == 0){
        window.alert('Nenhum valor encontrado, adicione valores antes de finalizar')
    } else {
        //Variável definida para mostrar quantos elementos possuem dentro da array
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //Teste para identificar o maior e o menor valor analisando cada posição;
        //Teste para somar todos os valores adicionados;
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        //Comando para calcular a média entre os valores adicionados
        media = soma / tot

        //Resposta de cada uma das utilidades presentes no código. 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, foram adicionados ${tot} números.</p>`
        res.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores adicionados é: ${soma}</p>`
        res.innerHTML += `<p>E a média entre os valores adicionados foi de ${media}</p>`

    }

}