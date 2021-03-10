function solucao(precos) {
    // seu código aqui
      
      
       let array = []
  
  for (snoop = 0; snoop < precos.length; snoop++) {
  
  for (i = 0; i < precos.length; i++) {
    let dif = precos[i] - precos[i+snoop]
      if (precos[i] > precos[i+snoop]){
        array.push(dif);  
      }
  }
  }
  
  
  console.log(Math.min.apply(null, array))   
      
      
      
      
      
      
  
  }