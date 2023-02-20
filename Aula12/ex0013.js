//Método usado para puxar a data do sistema para o código
var agora = new Date()
var DatSem = agora.getDay()

/*Dias da semana representado pelo JS:
0 - Domigo
1 - Segunda 
2 - Terça 
3 - Quarta
4 - Quinta  
5 - Sexta 
6 - Sabádo
*/

/*Os dias da semana são representados por números no JS.
Para podermos ver o dia pelo nome, podemos utilizar o "SWITCH"*/

switch (DatSem) {                                                
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-Feira')
        break
    case 2:
        console.log('Hoje é Terça-Feira')
        break
    case 3:
        console.log('Hoje é Quarta-Feira')
        break
    case 4:
        console.log('Hoje é Quinta-Feira')
        break
    case 5:
        console.log('Hoje é Sexta-Feira')
        break
    case 6:
        console.log('Hoje é Sabádo')
        break
    default:
        console.log('ERRO: Dia da semana invalido!')
}








