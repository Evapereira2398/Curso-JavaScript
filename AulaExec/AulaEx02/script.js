const { ImageFormat } = require("discord.js")

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (forano.value.length == 0 || forano.value > ano || forano.value < 1900){
        window.alert('ERRO: Verifique os dados e tente novamente')
    } 
    
    else {
        var forsex = document.getElementsByName('radsex')
        var idade = ano - Number(forano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (forsex[0].checked){
                genero = 'homem'

                if (idade >= 0 && idade <= 12) {
                    //criança
                    img.setAttribute('src', 'bebem.png')
                } else if (idade < 30) {
                    //JOvem
                    img.setAttribute('src', 'jovemm.png')
                } else if (idade < 50) {
                    // adulto
                    img.setAttribute('src', 'adultom.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'velhom.png')
                }
                
            } else if (forsex[1].checked){
                genero = 'mulher'

                if (idade >= 0 && idade <= 12){
                    //criança
                    img.setAttribute('src', 'bebef.png')
                } else if (idade <= 30) {
                    //jovem 
                    img.setAttribute('src', 'jovemf.png')
                } else if (idade <= 50) {
                    //adulto
                    img.setAttribute('src', 'adultof.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'velhof.png')
                }
            }
            res.style.alignItems = ''
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
}