function solucao(ganhos, serasaScore, mesesParaPagar) {
    //seu código aqui
      
      
  let valor = 0
  
  const juros = [0.03, 0.09, 0.15]
  
  if (serasaScore < 300) {
      valor += (3 * ganhos + (ganhos * juros[0])) / mesesParaPagar
  }
      else if (serasaScore < 700){
        valor += (3 * ganhos + (ganhos * juros[1])) / mesesParaPagar  
      }
      else {
        valor += (3 * ganhos + (ganhos * juros[2])) / mesesParaPagar  
      }    
         
  console.log(valor)
     
  }