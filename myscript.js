let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]



let player = `x`




function press(x,y) {

    // Do stuff
    console.log(x,y)

  if (player == `x`)  {
      player = `0`
  } else{
      player = `x`
  }



   board[x][y] = player;
   
   let choice = document.getElementById(`${x}${y}`);
   choice.innerHTML = player;

  

   if (player == board[0][0] && player == board[0][1] && player == board[0][2]) {
       alert(`فزت ${player}`)
   } else if ( player == board[1][0] && player == board[1][1] && player == board[1][2]) {
       alert(`فزت ${player}`) 
   } else if ( player == board[2][0] && player == board[2][1] && player == board[2][2]) {
       alert(`فزت ${player}`)
   } else if ( player == board[0][0] && player == board[1][0] && player == board[2][0]) {
       alert(`فزت ${player}`) 
   } else if ( player == board[0][1] && player == board[1][1] && player == board[2][1]) { 
       alert(`فزت ${player}`)
   } else if ( player == board[0][2] && player == board[1][2] && player == board[2][2]) { 
       alert(`فزت ${player}`)
   } else if ( player == board[0][0] && player == board[1][1] && player == board[2][2]) { 
       alert(`فزت ${player}`)
   } else if ( player == board[0][2] && player == board[1][1] && player == board[2][0]) { 
       alert(`فزت ${player}`)
   }

 
  


}










