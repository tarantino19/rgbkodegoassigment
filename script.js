`use strict`

function getRandomRGBOne() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBTwo() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBThree() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBFour() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBFive () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBSix() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBSeven() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBEight() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBNine() {
    let num = Math.round(0xffffff * Math.random());
    let red = num >> 16;
    let green = num >> 8 & 255;
    let blue = num & 255;
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

//It generates a number between 0 and 0xfffff (or 2^24, the highest number you can get from 24 bits). The highest value you can get from 8 bits is 255. This algorithm takes the left-most 8 bits of the random number for RED, the middle 8 bits for GREEN, and the last 8 bits for BLUE, using all 24 bits of the random number.

function sparklingBall () {
    let ballOne = document.getElementById("ball1") 
    let ballTwo = document.getElementById("ball2") 
    let ballThree = document.getElementById("ball3") 
    let ballFour = document.getElementById("ball4") 
    let ballFive= document.getElementById("ball5") 
    let ballSix= document.getElementById("ball6") 
    let ballSeven= document.getElementById("ball7") 
    let ballEight= document.getElementById("ball8") 
    let ballNine = document.getElementById("ball9") 

    let rgbOne  = getRandomRGBOne()
    let rgbTwo  = getRandomRGBTwo()
    let rgbThree  = getRandomRGBThree()
    let rgbFour  = getRandomRGBFour()
    let rgbFive = getRandomRGBFive()
    let rgbSix  = getRandomRGBSix()
    let rgbSeven = getRandomRGBSeven()
    let rgbEight  = getRandomRGBEight()
    let rgbNine  = getRandomRGBNine()

    //bg color change
    ballOne.style.backgroundColor = rgbOne
    ballTwo.style.backgroundColor = rgbTwo
    ballThree.style.backgroundColor = rgbThree
    ballFour.style.backgroundColor = rgbFour
    ballFive.style.backgroundColor = rgbFive
    ballSix.style.backgroundColor = rgbSix
    ballSeven.style.backgroundColor = rgbSeven
    ballEight.style.backgroundColor = rgbEight
    ballNine.style.backgroundColor = rgbNine

    //text color change
    ballOne.style.color = rgbNine
    ballTwo.style.color = rgbEight
    ballThree.style.color = rgbSeven
    ballFour.style.color = rgbFive
    ballFive.style.color = rgbSix
    ballSix.style.color = rgbFour
    ballSeven.style.color= rgbThree
    ballEight.style.color = rgbTwo
    ballNine.style.color = rgbOne


    let ball1Color = document.getElementById ("ball1-color")
    ball1Color.innerText = rgbOne
    let ball2Color = document.getElementById ("ball2-color")
    ball2Color.innerText = rgbTwo
    let ball3Color = document.getElementById ("ball3-color")
    ball3Color.innerText = rgbThree
    let ball4Color = document.getElementById ("ball4-color")
    ball4Color.innerText = rgbOne
    let ball5Color = document.getElementById ("ball5-color")
    ball5Color.innerText = rgbTwo
    let ball6Color = document.getElementById ("ball6-color")
    ball6Color.innerText = rgbThree
    let ball7Color = document.getElementById ("ball7-color")
    ball7Color.innerText = rgbOne
    let ball8Color = document.getElementById ("ball8-color")
    ball8Color.innerText = rgbTwo
    let ball9Color = document.getElementById ("ball9-color")
    ball9Color.innerText = rgbThree
}

function start () {
    party = setInterval (sparklingBall, 800)
}

function partyBeat() {
    let partyBeatInSeconds = document.getElementById ("beats").value
    newParty = setInterval (sparklingBall, partyBeatInSeconds)
}

function stopFunction () {
    clearInterval(party)
}

function stopFunctionTwo (){
    clearInterval(newParty)
    setTimeout(() => {
        location.reload ()
    }, 1500);
}





