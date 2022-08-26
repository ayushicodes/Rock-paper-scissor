let ComputerChoice = document.getElementById('computer-choice')
let userChoice = document.getElementById('user-choice')
let result = document.getElementById('result')
let possibleChoice = document.querySelectorAll('button')
let user;
let ComputerChoicedis;

possibleChoice.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let id = e.target.id
        user = id
        userChoice.innerHTML = user
        ComputerChoicedisplay()
        resultDisplay()


    })

})

function ComputerChoicedisplay() {
    let randomNumber = Math.floor(Math.random() * possibleChoice.length)
    if (randomNumber === 0) {
        ComputerChoicedis = 'Rock'
    }
    else if (randomNumber === 1) {
        ComputerChoicedis = 'Scissor'
    }
    else if (randomNumber === 2) {
        ComputerChoicedis = 'Paper'
    }
    ComputerChoice.innerHTML = ComputerChoicedis
}

function resultDisplay() {

    if (ComputerChoicedis === user) {
        result.innerHTML = 'its a tie'
    }
    if (ComputerChoicedis === 'Rock' && user === 'Paper') {
        result.innerHTML = 'You Win'
    }
    if (ComputerChoicedis === 'Paper' && user === 'Rock') {
        result.innerHTML = 'Computer Wins'
    }
    if (ComputerChoicedis === 'Rock' && user === 'Scissor') {
        result.innerHTML = 'Computer Wins'
    }
    if (ComputerChoicedis === 'Scissor' && user === 'Rock') {
        result.innerHTML = 'You Win'
    }
    if (ComputerChoicedis === 'Paper' && user === 'Scissor') {
        result.innerHTML = 'You Win'
    }
    if (ComputerChoicedis === 'Scissor' && user === 'Paper') {
        result.innerHTML = 'Computer Wins'
    }

}
