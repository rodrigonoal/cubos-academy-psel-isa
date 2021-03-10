function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
      
  let precoProd = 0
  let precoFret = 0
  
  precoFret += distanciaRestaurante * 120
  
  
  for (i = 0; i < produtos.length; i++){
    let produto = produtos[i];
    let p = produto.valor * produto.quantidade
     if (produto.categoria === "SALGADO") {
       p *= 0.90
     }
     else if (produto.categoria === "BEBIDA") {
       p *= 0.70
     }
     else if (produto.categoria === "DOCE") {
       p *= 0.85
     }
     precoProd += p
  }
  
  
  
  if (cupomDesconto == "NATAL10" && precoProd > 3000 && ehPrimeiraCompra === true) {
    precoProd *= 0.90
  }
  else if (cupomDesconto == "NATAL20" && precoProd > 4500 && ehPrimeiraCompra === true) {
    precoProd *= 0.80
  }
  else if (cupomDesconto == "NATAL30" && precoProd > 6000 && ehPrimeiraCompra === true) {
    precoProd *= 0.70
  }
  else if (cupomDesconto == "NATALSUPREMO" && precoProd > 8000 && ehPrimeiraCompra === true) {
    precoProd *= 0.70
    precoFret = 0 
  }
  
  let total = precoFret + precoProd
      
  console.log(total)
      
      
      
      
      
      
      
      
      
  }