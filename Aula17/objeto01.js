let amigo = {nome:'José', idade: 24, peso: 85.6, sexo:'M',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)