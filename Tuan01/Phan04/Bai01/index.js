let score = 20; 
let secretNumber = Math.trunc(Math.random() * 20) + 1; 

function resetGame() {
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1; 

    document.querySelector('.message').textContent = 'Start guessing...'; 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.score').textContent = score; 
    document.querySelector('.guess').value = ''; 

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', resetGame);
