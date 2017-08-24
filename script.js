var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var shape;
var color="#004346";
var mouseX=0;
var mouseY=0;
var mode=1;
var type;
function start() {
    if(mode==0) {
        // console.log(mode);
        c.onmousemove=function(event) {if(mode==0)draw(event);else(start())};
        // setInterval(function(){c.onmousedown=function(event) { c.onmousedown=function(event) {if(mode==0)draw(event);else(start())}},10);
        console.log(mode);
    }
    else {
        // console.log(mode);
        c.onclick=function(event) {draw(event)};
    }
}

function setmode(type) {
    if (type==1) {
        mode=1;
        console.log(mode);
        start();
    }
    else {
        mode=0;
        console.log(mode);
        start();
    }
}

function setcolor(cr) {
    color=cr;
}

function sets(s) {
    console.log(s);
    shape=s;
}
function draw(event) {
    mouseX=event.clientX;
    mouseY=event.clientY;
    console.log(mouseX);
    console.log(mouseY);
    if (shape=='c')
        circle();
    else if(shape=='sq')
        square();
    else if(shape=='er')
        erase();
}
function circle() {
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.arc(mouseX-200,mouseY-95,25,0,2*Math.PI);
    ctx.lineWidth = 0;
    ctx.fill();
    // ctx.stroke();
}
function square() {
    ctx.fillStyle=color;
    ctx.fillRect(mouseX-230,mouseY-115,50,50);
}
function erase() {
    ctx.clearRect(mouseX-230,mouseY-115,50,50);
}
function clearcnvs() {
    ctx.clearRect(0,0,1400,600);
}

// function pausecomp(ms) {
// ms += new Date().getTime();
// while (new Date() < ms){}
// }

// function rd() {
//     clearcnvs();
//     for (var i = 0; i < s.length; i++) {
//         console.log(i);
//         mouseX=mc[mcc]+50;
//         mouseY=mc[mcc+1]+50;
//         console.log(mouseX,mouseY);
//         mcc=mcc+2;
//         console.log(col[i]);
//         color=col[i];
//         if(s[i]==0)
//             circle();
//         else if(s[i]==1)
//             square();
//         else if(s[i]==2)
//             erase();
//         pausecomp(2 00);
//     }
//     mcc=0;
// }

// start();
