var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var shape;
var color="#004346";
var mouseX=0;
var mouseY=0;
var mode=1;
var type;
var mc=[];
var s=[];
var col=[];
var m=0;
var mcc=0;
var i=0;
var stp;
function start(){
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
    console.log(color);
}

function sets(s) {
    console.log(s);
    shape=s;
}
function draw(event) {
    mouseX=event.clientX;
    mouseY=event.clientY;
    mc.push(mouseX);
    mc.push(mouseY);
    col.push(color);
    console.log(mouseX);
    console.log(mouseY);
    if (shape=='c') {
        s.push(0);
        circle();
    }
    else if(shape=='sq') {
        s.push(1);
        square();
    }
    else if(shape=='er') {
        s.push(2);
        erase();
    }
}
function circle() {
    console.log('circle',mouseX,mouseY);
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
    console.log('clear');
    ctx.clearRect(0,0,1400,600);
}

// function pausecomp(ms) {
// ms += new Date().getTime();
// while (new Date() < ms){}
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

function rd() {
    clearcnvs();
        stp=setInterval(function () {
        // for (var i = 0; i < s.length; i++) {
        console.log(i);
        mouseX=mc[mcc];
        mouseY=mc[mcc+1];
        console.log(mouseX,mouseY);
        mcc=mcc+2;
        console.log(col[i]);
        color=col[i];
        if(s[i]==0)
            circle();
        else if(s[i]==1)
            square();
        else if(s[i]==2)
            erase();
        i++;
        // }
        if(i>=s.length) {
            i=0;
            mcc=0;
            stopinterval();
        }
    },100);
}

function stopinterval (){
    clearInterval(stp);
}
