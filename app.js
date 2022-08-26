let ComputerChoice = document.getElementById('computer-choice')
let userChoice = document.getElementById('user-choice')
let result = document.getElementById('result')
let possibleChoice = document.querySelectorAll('button')
let user;
let ComputerChoicedis;
let resultdis;


possibleChoice.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let id = e.target.id
        user = id
        userChoice.innerHTML = user
        ComputerChoicedisplay()


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


