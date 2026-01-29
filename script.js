window.onload = function () {
    displayEllie();
};

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayMwah();
        });
    } else if (option === 'no') {
        const noBtn = document.getElementById('no-button');
        const yesBtn = document.getElementById('yes-button');

        noBtn.innerText = 'You sure?';

        const size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = size * 1.5 + 'px';
    }
}

function flashRainbowColors(callback) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;

    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        callback();
    }, 2000);
}

function displayEllie() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';

    const img = new Image();
    img.src = 'images/ellie.png';
    img.alt = 'Ellie';

    container.appendChild(img);
}

function displayMwah() {
    const container = document.getElementById('image-container');
    container.innerHTML = ''; // clear existing image

    const img = new Image();
    img.src = 'images/mwah.gif'; // ✅ include .gif extension
    img.alt = 'Mwah';

    container.appendChild(img);

    document.getElementById('options').style.display = 'none';
}