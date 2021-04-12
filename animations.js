/*let b_252_1 = new Breaker_252("CLOSED" , 1);
let b_252_2 = new Breaker_252("CLOSED" , 2);
let b_252_8 = new Breaker_252("CLOSED" , 8);

let SS = new Selector_Switch(false);

//let LR = new Lockout_Relay();


document.getElementById("252-1-close").onclick = function() {
    b_252_1.update(SS.getState, false);
}
document.getElementById("252-1-open").onclick = function() {
    b_252_1.update(SS.getState, true);
}

document.getElementById("252-2-close").onclick = function() {
    b_252_2.update(SS.getState, false);
}
document.getElementById("252-2-open").onclick = function() {
    b_252_2.update(SS.getState, true);
}

document.getElementById("252-8-close").onclick = function() {
    b_252_8.update(SS.getState, false);
}
document.getElementById("252-8-open").onclick = function() {
    b_252_8.update(SS.getState, true);
}*/

//changable size of canvas
var canvasWidth = 1000;
var canvasHeight = 500;

var srcxControlSwitch1;
var srcxControlSwitch2;
var srcxControlSwitch3;

var srcxLockoutRelay1;
var srcxLockoutRelay2;

var srcxSelector;

//2frame sheet
var sheetWidth1 = 300;
var sheetHeight1 = 150;

//3frame sheet
var sheetWidth2 = 424;
var sheetHeight2 = 150;

var cols = 2;
var cols2 = 3;

var width = sheetWidth1 / cols;
var height = sheetHeight1;

var widthCS = sheetWidth2 / cols2;
var heightCS = sheetHeight2;

//cycles through frames
var currentframe1 = 0;
var currentframe2 = 0;
var currentframe3 = 0;

var character = new Image();
character.src = "lockout.png";

var character2 = new Image();
character2.src = "selector.png";

var character3 = new Image();
character3.src = "controlSwitch.png";

//changable locations of sprites

var lockout1PosX = 0;
var lockout1PosY = 150;
var lockout2PosX = 800;
var lockout2PosY = 150;
var selectorPosX = 0;
var selectorPosY = 0;
var controlSwitch1X = 250;
var controlSwitch1Y = 0;
var controlSwitch2X = 550;
var controlSwitch2Y = 0;
var controlSwitch3X = 400;
var controlSwitch3Y = 150;

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');

function display(){
    ctx.drawImage(character,0,0, width, height, lockout1PosX, lockout1PosY, width, height);//lockout1
    ctx.drawImage(character,0,0, width, height, lockout2PosX, lockout2PosY, width, height);//lockout2
    ctx.drawImage(character2,0,0, width, height, selectorPosX, selectorPosY, width, height);//selector
    ctx.drawImage(character3,141,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS);//control switches
    ctx.drawImage(character3,141,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS);
    ctx.drawImage(character3,141,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS);
}

function updateFrameLeftLockout(){
    currentFrame1 = ++currentframe1 % cols;
    srcxLockoutRelay1 = currentFrame1 * width;
    ctx.clearRect(lockout1PosX,lockout1PosY, width, height);
}
function drawImageLeftLockout(){
    updateFrameLeftLockout();
    ctx.drawImage(character,srcxLockoutRelay1,0, width, height, lockout1PosX, lockout1PosY, width, height);
}

function updateFrameRightLockout(){
    currentFrame2 = ++currentframe2 % cols;
    srcxLockoutRelay2 = currentFrame2 * width;
    ctx.clearRect(lockout2PosX,lockout2PosY, width, height);
}
function drawImageRightLockout(){
    updateFrameRightLockout();
    ctx.drawImage(character,srcxLockoutRelay2,0, width, height, lockout2PosX, lockout2PosY, width, height);
}
function updateFrameSelector(){
    currentFrame3 = ++currentframe3 % cols;
    srcxSelector = currentFrame3 * width;
    ctx.clearRect(selectorPosX,selectorPosY, width, height);
}
function drawImageSelector(){
    updateFrameSelector();
    ctx.drawImage(character2,srcxSelector,0, width, height, selectorPosX, selectorPosY, width, height);
}


function updateFrameControlSwitch1(xcoor){
    ctx.clearRect(controlSwitch1X,controlSwitch1Y, width, height);
    if (xcoor > (controlSwitch1X + (widthCS / 2)))
    {
        
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS);
    }
    else
    {
        
        ctx.drawImage(character3,282,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS); 
    }

}
function drawImageControlSwitch1(xcoor){
    
    updateFrameControlSwitch1(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,141,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS);},500);
}
function updateFrameControlSwitch2(xcoor){
    ctx.clearRect(controlSwitch2X,controlSwitch2Y, width, height);
    if (xcoor > (controlSwitch2X + (widthCS / 2)))
    {
        
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS);
    }
    else
    {
        
        ctx.drawImage(character3,282,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS); 
    }
}
function drawImageControlSwitch2(xcoor){
    updateFrameControlSwitch2(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,141,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS);},500);
}
function updateFrameControlSwitch3(xcoor){
    ctx.clearRect(controlSwitch3X,controlSwitch3Y, width, height);
    if (xcoor > (controlSwitch3X + (widthCS / 2)))
    {
        
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS);
    }
    else
    {
        
        ctx.drawImage(character3,282,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS); 
    }
}
function drawImageControlSwitch3(xcoor){
    updateFrameControlSwitch3(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,141,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS);},500);
}

function getCoor(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    console.log("x: " + x + " y: " + y);
    if ((x > selectorPosX && x < selectorPosX + width)&& (y > selectorPosY && y < selectorPosY + height))
    {
        drawImageSelector();
    }
    else if ((x > lockout1PosX && x < lockout1PosX + width) && (y > lockout1PosY && y < lockout1PosY + height))
    {
        drawImageLeftLockout();
    }
    else if ((x > lockout2PosX && x < lockout2PosX + width) && (y > lockout2PosY && y < lockout2PosY + height))
    {
        drawImageRightLockout();
    }
    else if ((x > controlSwitch1X && x < controlSwitch1X + widthCS) && (y > controlSwitch1Y && y < controlSwitch1Y + heightCS))
    {
        drawImageControlSwitch1(x);
    }
    else if ((x > controlSwitch2X && x < controlSwitch2X + widthCS) && (y > controlSwitch2Y && y < controlSwitch2Y + heightCS))
    {
        drawImageControlSwitch2(x);
    }
    else if ((x > controlSwitch3X && x < controlSwitch3X + widthCS) && (y > controlSwitch3Y && y < controlSwitch3Y + heightCS))
    {
        drawImageControlSwitch3(x);
    }
}
setTimeout(display,0);

