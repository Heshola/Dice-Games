// player 1
let randomNumber = Math.ceil(Math.random() * 6)

let randomDiceImage = 'dice ' + randomNumber + '.png'

let randomImageSource = 'images/' + randomDiceImage

let image = document.querySelectorAll('img')[0]
image.setAttribute('src',randomImageSource)





// player 2



let randomNumber2 = Math.ceil(Math.random() * 6)

let randomDiceImage2 = 'dice ' + randomNumber2 + '.png'

let randomImageSource2 = 'images/' + randomDiceImage2

let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource2)


// conditional statement

if(randomNumber > randomNumber2){
    document.querySelector('h1').innerHTML='player1 wins 🎉🎉🎉'

}else if(randomNumber2>randomNumber){
    document.querySelector('h1').innerHTML='player2 wins 🎉🎉🎉'
}else{
    document.querySelector('h1').innerHTML='Draw 🤦‍♀️🤦‍♂️'
}











