function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
        
    
    let array = []
    
    for (i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        
        if (produto.valor > valorMaximo || produto.avaliacao <  avaliacaoMinima) {
        continue;
      }
    
    
    
      else {
          array.push(produto)
    
      }
    }
    console.log(array)    
    
        
    
        
        
        
        
    
    
    }
    