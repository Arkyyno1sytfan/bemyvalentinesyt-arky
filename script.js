const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainImage = document.getElementById("mainImage");
const gifImage = document.getElementById("gifImage");
const question = document.getElementById("question");
const options = document.getElementById("options");

// Rainbow background flash
function flashRainbowColors(callback) {
    const colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Yes button behavior
yesBtn.addEventListener("click", () => {
    flashRainbowColors(() => {
        mainImage.style.display = "none";  // hide Ellie PNG
        gifImage.style.display = "block";  // show Mwah GIF
        question.style.display = "none";   // hide question
        options.style.display = "none";    // hide buttons
    });
});

// No button behavior
noBtn.addEventListener("click", () => {
    noBtn.innerText = "You sure?";
    yesBtn.style.fontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize) * 1.5 + "px";
});

// Select the audio element
const music = document.getElementById("bgMusic");


// Select the audio element
const song = document.getElementById("bgMusic");
music.loop = true;

// Flag to ensure music only starts once
let musicStarted = false;

// Function to play music on first interaction
function startMusic() {
    if (!musicStarted) {
        music.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
        musicStarted = true;
        // Remove the event listeners once triggered
        window.removeEventListener("click", startMusic);
        window.removeEventListener("keydown", startMusic);
    }
}

// Listen for the first click or key press
window.addEventListener("click", startMusic);
window.addEventListener("keydown", startMusic);

