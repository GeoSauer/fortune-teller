const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const inputContainer = document.getElementById('input-container');
const fortuneContainer = document.getElementById('fortune-container');

askButton.addEventListener('click', () => {
    inputContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
