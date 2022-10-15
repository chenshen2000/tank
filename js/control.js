$("body").append($('<div class="control-wrapper"><div class="control-btn control-top"></div><div class="control-btn control-left"> </div><div class="control-btn control-bottom"></div><div class="control-btn control-right"></div></div></div><div class="control-shot"></div>'));
$(".control-shot").attr("onclick","controlShot()");
function controlShot(){
    bulletAppear("tankmove");
}
/*
$(".control-top").attr("touchstart","controlTop()");
$(".control-bottom").attr("touchstart","controlBottom()");
$(".control-left").attr("touchstart","controlLeft()");
$(".control-right").attr("touchstart","controlRight()");
// $(".control-btn").attr("touchend","controlOut()");
// 

function controlTop(){
    code=87;
    keyState=true;
    console.log("我被按下了")
    
}
function controlBottom(){
    code=83;
    keyState=true;
}
function controlLeft(){
    code=65;
    keyState=true;
}
function controlRight(){
    code=68;
    keyState=true;
}
function controlOut(){
    keyState=false;
    console.log("我被触发了")
}
*/
document.getElementsByClassName("control-top")[0].addEventListener("touchstart",function(){
    code=87;
    keyState=true;

    
})
document.getElementsByClassName("control-bottom")[0].addEventListener("touchstart",function(){
    code=83;
    keyState=true;
})
document.getElementsByClassName("control-left")[0].addEventListener("touchstart",function(){
    code=65;
    keyState=true;
})
document.getElementsByClassName("control-right")[0].addEventListener("touchstart",function(){
    code=68;
    keyState=true;
})
for(let i=0;i<4;i++)
{
    document.getElementsByClassName("control-btn")[i].addEventListener("touchend",function(){
        keyState=false;
        console.log("我被触发了")
    })
}
