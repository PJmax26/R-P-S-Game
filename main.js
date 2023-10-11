const playerChoices = document.querySelectorAll('.player_choice')
const computeImg = document.querySelector('.computer_img')
let message = document.querySelector('.message')
let score = document.querySelector('.score')

let paper = document.querySelector('#paper')
let rock = document.querySelector('#rock')
let scissors = document.querySelector('#scissors')

let player = ''
let computer = ''
let count = 0

// for(let i = 0; i < playerChoices.length; i++){
//     playerChoices[i].addEventListener('click', (e)=>{
//         e.target.classList.toggle('active')
//         x.innerText = e.target.getAttribute('id')
//     })
// }

playerChoices.forEach((e)=>{
    const choicess = ['rock', 'paper', 'scissors']

    e.addEventListener('click', ()=>{
        player = e.getAttribute('id')

        let randomNumber = Math.floor(Math.random()*3)
        computer = choicess[randomNumber]

        computeImg.src = `asserts/icon-${computer}.svg`

        e.classList.add('active')

        if(e.getAttribute('id') == paper.getAttribute('id')){
            rock.classList.remove('active')
            scissors.classList.remove('active')
        }
        else if(e.getAttribute('id') == rock.getAttribute('id')){
            paper.classList.remove('active')
            scissors.classList.remove('active')
        }
        else if(e.getAttribute('id') == scissors.getAttribute('id')){
            rock.classList.remove('active')
            paper.classList.remove('active')
        }

        checkWinner()
        updateScore()
    })

})

function checkWinner(){
    if(player == computer){
        message.innerText = "It's a tie"
    }
    else if(player == 'rock' && computer == 'paper'){
        message.innerText = "You lose"
    }
    else if(player == 'rock' && computer == 'scissors'){
        message.innerText = "You win"
    }
    else if(player == 'paper' && computer == 'rock'){
        message.innerText = "You win"
    }
    else if(player == 'paper' && computer == 'scissors'){
        message.innerText = "You lose"
    }
    else if(player == 'scissors' && computer == 'rock'){
        message.innerText = "You lose"
    }
    else if(player == 'scissors' && computer == 'paper'){
        message.innerText = "You win"
    }
}

function updateScore(){
    if(message.innerText == "It's a tie"){
        count = count
    }
    else if(message.innerText == "You lose"){
        count -= 1
    }
    else if(message.innerText == "You win"){
        count += 1
    }
    score.textContent = count
}
