const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const inputContainer = document.getElementById('input-container');
const fortuneContainer = document.getElementById('fortune-container');

askButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];

    inputContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

const fortune = document.getElementById('fortune');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];
