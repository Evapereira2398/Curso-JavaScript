function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#f5ea9a'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde 
        img.src = 'fototarde.png'
        document.body.style.background = '#e49b61'
    } else{
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = "#3884be"
    }
}
