var idade = 70
console.log(`Você tem ${idade} anos, e você:`)
if (idade < 16){
    console.log('não vota')
} else if (idade < 18 || idade > 65){
      console.log('tem o voto opcional')
    } else {
        console.log('tem o voto obrigatório')
    }
