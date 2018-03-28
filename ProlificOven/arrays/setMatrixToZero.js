/*

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

*/

function setMatrixToZero(matrix) {
  // set a pointer at 0
  let firstMatrixRow = matrix[0];
  let matrixColumnLength = matrix.length;
  for (let i = 0; i < firstMatrixRow.length; i++) {
    for (let j = 0; j < matrixColumnLength; j++) {
      if (matrix[j][i] === 0) {
        // change all of matrix row i to zero
        for (let z = i; z < matrix[z].length; z++) {
          matrix[j][z] = 0;
          matrix[z][j] = 0;
        }
      }
    } 
  }
  return matrix;
}

matrix = [
  [1,1,1,1],
  [1,0,1,1],
  [1,1,1,1],
  [1,1,1,1]
];

console.log(setMatrixToZero(matrix))