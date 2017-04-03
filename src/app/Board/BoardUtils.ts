export const getDiagonalWinner = (colIndex,sideLength,squares) => {
  let playerToWin = squares[0][colIndex];
  if(colIndex==0){
  	for(let j=1;j<sideLength;j++){
	    if(squares[j][j]!==playerToWin){
	      return null;
	    }
  	}
  }else{
  	for(let j=1;j<sideLength;j++){
	  	let col = colIndex-j;
	    if(squares[j][col]!==playerToWin){
	      return null;
	    }
	}
  }
  return playerToWin;
};

export const getVerticalWinner = (colIndex,sideLength,squares) => {
	let playerToWin = squares[0][colIndex]; 
	for(let j=1;j<sideLength;j++){
	  if(squares[j][colIndex]!==playerToWin){
	    return null;
	  }
	}
	return playerToWin;
};

export const getHorizontalWinner = (rowIndex,sideLength,squares) => {
	let playerToWin = squares[rowIndex][0]; 
	for(let j=1;j<sideLength;j++){
	  if(squares[rowIndex][j]!==playerToWin){
	    return null;
	  }
	}
	return playerToWin;
};

export const calculateWinner = (squares) => {
	var sideLength = squares.length;
	let winner=null;
	for(let i=0;i<sideLength;i++){ //Iterate 1st row only
		if(squares[0][i]){
	    	if((i === 0 || i === sideLength-1)) {
				winner = getDiagonalWinner(i,sideLength,squares);
				if(winner){return winner;}
			}
			winner=getVerticalWinner(i,sideLength,squares);
			if(winner){return winner;}
		}
		if(squares[i][0]){
			winner=getHorizontalWinner(i,sideLength,squares);
			if(winner){return winner;}
		}
	}
	return winner;
};
