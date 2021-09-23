document.addEventListener('DOMContentLoaded', ()=>{
     
    const cardArray = [   
      {
          name: 'image1',
          img:'images/image1.png'
      },
      {
          name: 'image1',
          img:'images/image1.png'
      },
      {
          name: 'image2',
          img:'images/image2.png'
      },
      {
          name: 'image2',
          img:'images/image2.png'
      },
      {
          name: 'image3',
          img:'images/image3.png'
      },
      {
          name: 'image3',
          img:'images/image3.png'
      },
      {
          name: 'image4',
          img:'images/image4.png'
      },
      {
          name: 'image4',
          img:'images/image4.png'
      },
      {
          name: 'image5',
          img:'images/image5.png'
      },
      {
          name: 'image5',
          img:'images/image5.png'
      },
      {
          name: 'image6',
          img:'images/image6.png'
      },
      {
          name: 'image6',
          img:'images/image6.png'
      }
    ]
    
    cardArray.sort(()=> .5 - Math.random())

    const grid = document.querySelector('.grid');
    const  resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId =[]
    var cardsWon=[]

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
   function flipCard(){
       var cardId = this.getAttribute('data-id')
       cardsChosen.push(cardArray[cardId].name)
       cardsChosenId.push(cardId)
       this.setAttribute('src', cardArray[cardId].img)
       if(cardsChosen.length ===2){
          setTimeout(checkForMatch, 500)
       }
   }

 function checkForMatch(){
     // get all the cards--img
     var cards = document.querySelectorAll('img')
     const optionOne = cardsChosenId[0]
     const optionTwo = cardsChosenId[1]
     if(cardsChosen[0]=== cardsChosen[1]){
         alert('yeah got a match')
         cards[optionOne].setAttribute('src', 'images/white.png')
         cards[optionTwo].setAttribute('src', 'images/white.png')
         cardsWon.push(cardsChosen)
     }
     else{
         cards[optionOne].setAttribute('src', 'images/blank.png' )
         cards[optionTwo].setAttribute('src', 'images/blank.png' ) 
         alert('Opps, Try again!!!')     
     }

     cardsChosen = []
     cardsChosenId = []
     resultDisplay.textContent = cardsWon.length
     if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Yeah... Congrats. You have won!!!!"
     }
  
 }


    createBoard()
})