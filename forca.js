function solucao(palpite, palavra) {
	// seu código aqui
    
    
    let valor = 0


    for (i = 0; i < palavra.length; i++) {
        let user = palpite[0]; 
        let ans = palavra[i];
        
        
        if (user === ans) {
            valor += 1
        }
        else {

        }     
    }

console.log(valor)    

    
    
    
}