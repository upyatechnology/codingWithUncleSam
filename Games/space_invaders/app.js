//  function addDivsToGrid(){
// //     // var container = document.getElementsByClassName("grid");
// //     // for (var i = 0; i < 225; i++) {
// //     //    container.innerHTML += '<div class="box"></div>';
// //     // }

   

//     for (let i = 0; i < 225; i++) {
//        // console.log(i)
//         var div = document.createElement('div');
//        // console.log(div)
//         var grid =document.getElementsByClassName('grid'); 
//       //  console.log(grid)
//         grid[0].appendChild(div);
//        // console.log('appended')
        
//     }

// }

document.addEventListener('DOMContentLoaded',() =>{
  
let squares = document.querySelectorAll('.grid div');
console.log(squares.length)
const displayResult = document.querySelector('#result')
let width = 15
let currentShooterIndex = 202
let currentInvaderIndex = 0
let invadersTakenDown = []
let result = 0
let direction = 1
let invaderId 

//define alient invades
// const alienInvaders =[
//     0,1,2,3,4,5,6,7,8,9,
//     15,16,17,18,19,20,21,22,23,24,
//     30,31,32,33,34,35,36,37,38,39
// ]

//draw the alien invader
//alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader'))

//draw shooter
//squares[currentShooterIndex].classList.add('shooter')


// function moveShooter(e){
// squares[currentShooterIndex].classList.remove('shooter')
//  switch (e.keyCode) {
//      case 37:
//          if (currentShooterInde % width != 0) currentShooterIndex -=1 
//          break;
//      case 39:
//         if (currentShooterInde % width < width - 1) currentShooterIndex +=1   
//          break;
//  }
//  squares[currentShooterIndex].classList.add('shooter')
// }
//  document.addEventListener('keydown', moveShooter)

// })