function solucao(jogadas) {
    
    const array1 = [];
    const array2 = [];
    
    
    for (i = 0; i < jogadas.length; i++) {
        let jogada = jogadas[i];
        
        if (jogada === 1) {
            array1.push(jogada)
        } 
        else {
            array2.push(jogada)
        }
        
    }
    
    if (array1.length === array2.length) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    
    
    
    
    
  
}