//base
  const actual = []
function vecinoLeal(emptyPi) {
  actual.push(emptyPi)
  if (actual.length > 2) {
      actual.shift();
  }
  return actual;
}
function AnaliticVoid(emptyPi, vecinoT,tam) {
  const col = emptyPi.col;
  const row = emptyPi.row;
  const validQuadrants = [];
  const vecino=[
    {
      row:vecinoT.row,
      col:vecinoT.col
    }
  ]
  console.log(emptyPi, vecino, tam)
  // Verificar si la casilla está en la parte superior
  if (row > 0 &&
      vecino.row != row - 1 && vecino.col != col
  ) {
    console.log(`pa arriba`)
      validQuadrants.push({ row: row - 1, col: col }); // Casilla arriba
      return validQuadrants;
  }

  // Verificar si la casilla está en el borde izquierdo
  if (col > 0 &&
      vecino.row !== row  && vecino.col !== col-1
  ) {
    console.log(`pa izquierda`)
      validQuadrants.push({ row: row, col: col - 1 }); // Casilla a la izquierda
      return validQuadrants;
  }

  // Verificar si la casilla está en la parte inferior
  if (row < tam - 1&&
      vecino.row!==row+1 && vecino.col!==col
  ) {
    
    console.log(`pa bajo`)
      validQuadrants.push({ row: row + 1, col: col }); // Casilla abajo
      return validQuadrants;
  }

  // Verificar si la casilla está en el borde derecho
  if (col < tam - 1&&
      vecino.row!==row && vecino.col!==col+1
  ) {
    console.log(`pa derecha`)
      validQuadrants.push({ row: row, col: col + 1 }); // Casilla a la derecha
      return validQuadrants;
  }
  
  console.log(`pa ningunlado`)
  return validQuadrants;
}

export { AnaliticVoid, vecinoLeal };
