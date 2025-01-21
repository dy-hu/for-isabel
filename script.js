var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 200){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["People say hearts pick places", "and how unfortunate it is for me"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("People say hearts pick places and how unfortunate it is for me", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 200 && frameNumber < 400){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["People say hearts pick places", "and how unfortunate it is for me"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("People say hearts pick places and how unfortunate it is for me", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 450){
        opacity = 0;
    }
    if(frameNumber > 450 && frameNumber < 650){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["That mine picked a place", "nearly 1,700 miles away"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("That mine picked a place nearly 1,700 miles away", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 650 && frameNumber < 850){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["That mine picked a place", "nearly 1,700 miles away"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("That mine picked a place nearly 1,700 miles away", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 900){
        opacity = 0;
    }
    if(frameNumber > 900 && frameNumber < 1100){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["But quite frankly it doesn't matter where you were", "the outcome would have all been the same"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("But quite frankly it doesn't matter where you were, the outcome would have all been the same", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1100 && frameNumber < 1300){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["But quite frankly it doesn't matter where you were", "the outcome would have all been the same"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("But quite frankly it doesn't matter where you were, the outcome would have all been the same", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1350){
        opacity = 0;
    }
    if(frameNumber > 1350 && frameNumber < 1550){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Loving you and having to say goodbye", "is one of the hardest things"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("Loving you and having to say goodbye is one of the hardest things", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1550 && frameNumber < 1750){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Loving you and having to say goodbye", "is one of the hardest things"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        } else {
            context.fillText("Loving you and having to say goodbye is one of the hardest things", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1800){
        opacity = 0;
    }
    if(frameNumber > 1800 && frameNumber < 2000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("I get the fortune of doing with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2000 && frameNumber < 2200){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("I get the fortune of doing with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2250){
        opacity = 0;
    }
    if(frameNumber > 2250 && frameNumber < 2450){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("I love you more than all the stars", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2450 && frameNumber < 2650){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("I love you more than all the stars", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2700){
        opacity = 0;
    }
    if(frameNumber > 2700){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Will you be my valentine?", canvas.width/2, canvas.height/2);
        document.getElementById("valentinesButton").style.display = "block";
        if(opacity < 1){
            opacity = opacity + 0.01;
        }
    }

    // Final messages that stay on screen together
    if(frameNumber == 4500){
        opacity = 0;
        secondOpacity = 0;
        thirdOpacity = 0;
    }
    if(frameNumber > 4500){
        // First line
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love you more than all the stars", "in the night sky ❤"], canvas.width/2, canvas.height/2 - 60, fontSize, lineHeight);
        } else {
            context.fillText("I love you more than all the stars in the night sky ❤", canvas.width/2, canvas.height/2 - 60);
        }
        if (opacity < 1) opacity = opacity + 0.01;

        // Second line (appears slightly after)
        if (frameNumber > 4600) {
            context.fillStyle = `rgba(255, 105, 180, ${secondOpacity})`;
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks(["Will you be my", "Valentine? 💝"], canvas.width/2, canvas.height/2 + 30, fontSize, lineHeight);
            } else {
                context.fillText("Will you be my Valentine? 💝", canvas.width/2, canvas.height/2 + 30);
            }
            if (secondOpacity < 1) secondOpacity = secondOpacity + 0.01;
        }

        // Third line (appears slightly after)
        if (frameNumber > 4700) {
            context.fillStyle = `rgba(255, 105, 180, ${thirdOpacity})`;
            context.fillText("Happy Valentine's Day <3", canvas.width/2, canvas.height/2 + 120);
            if (thirdOpacity < 1) thirdOpacity = thirdOpacity + 0.01;
            button.style.display = "block";
        }
    }
     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent === "Yes! ❤") {
        window.location.href = 'public/stats.html';
    }
});
