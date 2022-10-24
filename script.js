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
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function getRandomRGBEmojis() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

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
    let emojis = document.getElementById ("emojis")

    let rgbOne  = getRandomRGBOne()
    let rgbTwo  = getRandomRGBTwo()
    let rgbThree  = getRandomRGBThree()
    let rgbFour  = getRandomRGBFour()
    let rgbFive = getRandomRGBFive()
    let rgbSix  = getRandomRGBSix()
    let rgbSeven = getRandomRGBSeven()
    let rgbEight  = getRandomRGBEight()
    let rgbNine  = getRandomRGBNine()
    let emojiTen = getRandomRGBEmojis ()

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
    emojis.style.color = emojiTen


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
    clearInterval(newParty)
}

function stopFunctionTwo (){
    clearInterval(newParty)
    setTimeout(() => {
        location.reload ()
    }, 1500);
}





