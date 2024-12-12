let c = sessionStorage.getItem('score') ? parseInt(sessionStorage.getItem('score')) : 0;

// Function to check if the selected answer is correct
function checkAnswer(id, correctValue) {
    const selected = document.getElementById(id);
    return selected && selected.checked && selected.value === correctValue;
}

function handleAnswer(questionId, correctAnswer, nextPage) {
    if (checkAnswer(questionId, correctAnswer)) {
        c++;
        sessionStorage.setItem('score', c); // Store the updated score in sessionStorage
    }
    window.location.href = nextPage; // Navigate to the next question or result page
}

// Function to display the final score on the result page
function displayScore() {
    const finalScore = sessionStorage.getItem('score') || 0;
    document.getElementById("scoreDisplay").innerHTML = "Total Correct Answers: " + finalScore;
    sessionStorage.clear(); // Clear the session storage after displaying the result
}

function showLink() {
    const link = document.getElementById('hiddenLink');
    const button = document.getElementById('startButton');

    // Show the anchor tag
    link.style.display = 'inline';

    // Hide the button
    button.style.display = 'none';
}

function exit(){
    const end1 = document.getElementById('endbutton');
    end1.addEventListener("click",function(){
        window.close();
    })

    
}


function showend() {
    const end = document.getElementById('endbutton');
    const start = document.getElementById('hiddenLink');

    // Show the anchor tag
    end.style.display = 'inline';

    // Hide the button
    start.style.display = 'none';
}

// to display question number
let questionNumber = sessionStorage.getItem('currentQuestion')
    ? parseInt(sessionStorage.getItem('currentQuestion'))
    : 1;


// Display the current question number on the page
document.getElementById('questionNumber').textContent = questionNumber;

// Function to update the question number for the next page
function updateQuestionNumber() {
    sessionStorage.setItem('currentQuestion', questionNumber + 1);
}























// --------------------------------------------------------------------------------------------------------------------------------------------
 //--------------------
    // GET USER MEDIA CODE
//     //--------------------
navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

var video;
var webcamStream;

function startWebcam() {
if (navigator.getUserMedia) {
navigator.getUserMedia (

// constraints
{
video: true,
audio: false
},

// successCallback
function(localMediaStream) {
video = document.querySelector('video');
video.srcObject=localMediaStream;
webcamStream = localMediaStream;
},

// errorCallback
function(err) {
console.log("The following error occured: " + err);
}
);
} else {
console.log("getUserMedia not supported");
}  
}
function stopWebcam() {
webcamStream.stop();
}
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx;

function init() {
// Get the canvas and obtain a context for
// drawing in it
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
}

function snapshot() {
// Draws current image from the video element into the canvas
ctx.drawImage(video, 0,0, canvas.width, canvas.height);
}