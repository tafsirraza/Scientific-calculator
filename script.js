const ball = document.getElementById('ball');
const gameArea = document.getElementById('gameArea');
let x = gameArea.clientWidth / 2 - ball.clientWidth / 2;
let y = gameArea.clientHeight / 2 - ball.clientHeight / 2;

document.addEventListener('keydown', (event) => {
    const step = 10;
    switch(event.key) {
        case 'ArrowUp':
            y = Math.max(0, y - step);
            break;
        case 'ArrowDown':
            y = Math.min(gameArea.clientHeight - ball.clientHeight, y + step);
            break;
        case 'ArrowLeft':
            x = Math.max(0, x - step);
            break;
        case 'ArrowRight':
            x = Math.min(gameArea.clientWidth - ball.clientWidth, x + step);
            break;
    }
    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;
});

