// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('yes-button').style.display = 'none';
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayMwah(); // Display the mwah.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the ellie.png initially
function displayellie() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the ellie
    var ellieImage = new Image();
    // Set the source (file path) for the cat image
    ellieImage.src = 'ellie.png'; // Assuming the ellie image is named "ellie.png"
    // Set alternative text for the image (for accessibility)
    ellieImage.alt = 'Ellie';
    // When the ellie image is fully loaded, add it to the image container
    ellieImage.onload = function() {
        imageContainer.appendChild(displayEllieImage);
    };
}

// Function to display the mwah.gif
function displayMwah() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the mwah
    var mwahImage = new Image();
    // Set the source (file path) for the mwah image
    mwahImage.src = 'mwah.gif'; // Assuming the mwah image is named "mwah.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Mwah';
    // When the cat-heart image is fully loaded, add it to the image container
    mwahImage.onload = function() {
        imageContainer.appendChild(mwahImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the mwah.gif initially
displayMwah();