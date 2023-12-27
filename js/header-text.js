const greetings = [
    'ВІТАЮ!',
    'З РІЗДВОМ!',
    'З НОВИМ РОКОМ',
    'MERRY CHRISTMAS',
    'HAPPY NEW YEAR'
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const headerTitle = document.querySelector('.header__title');

function updateHeaderText() {
    headerTitle.innerText = getRandomItem(greetings);
}

setInterval(updateHeaderText, 2000);

