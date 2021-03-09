function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui
      
      let dist = - (velocidade * velocidade) / (2 * (aceleracao))
      
      
      if (dist < distanciaObjeto) {
          console.log("CAMINHO SEGURO")
      }
      else if (dist === distanciaObjeto) {
          console.log("NAO ACELERE")
      }
      else {
          console.log("COLISAO A FRENTE")
      }
    }