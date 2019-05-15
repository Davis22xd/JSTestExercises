// sum in spiral all the elements of an array
// example give this array [[ 3, 3, 3], [ 2, 1, 4], [ 4, 5, 6]]
// TODO define the condition

function findSolution(numbers) {
    var finalArray = [];
        
    while (numbers.length > 0) {
              var matrixVerticalLength = numbers.length;
              var matrixHorizontalLength = numbers[ matrixVerticalLength -1].length;
              numbers[0].forEach(x => finalArray.push(x));
              numbers.splice(0,1);
              
              if(matrixVerticalLength > 1 )
              {
                  getElements(numbers, matrixHorizontalLength, matrixVerticalLength, finalArray );
              }
        }
        
        var sum = 0;
        var sum = sum + finalArray[0];
        
        for(x=0; x < finalArray.length; x = x + 3){
        var multiplier = finalArray[x +3];
        if(multiplier) {
            sum = (sum + finalArray[x+1] - finalArray[x+ 2]) * multiplier;
        }
        else {
            sum = (sum + finalArray[x+1] - finalArray[x+ 2]);
        }
        }
        
        
        return sum;
}

function getElements(numbers, matrixHorizontalLength, matrixVerticalLength, finalArray  ) {
     
        numbers.map(row => {
            finalArray.push(row[matrixHorizontalLength -1]);
        })
        
        for( var x = matrixHorizontalLength -2; x > -1; x --) {
            finalArray.push(numbers[matrixVerticalLength - 2][x]);
        }
        
        numbers.splice(matrixVerticalLength - 2,1);
        
        numbers.forEach(row => row.splice(matrixHorizontalLength -1, 1));
}