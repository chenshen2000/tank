//隐藏提示
function HIDE(){
    document.getElementById("help").style.display="none";
}
//坦克产生之前动画效果
function startAnimation(obj1,obj2,bianhao){
    var time=0;
    for(var i=1;i<=7;i++){
            if(i<=4)
            {
                setTimeout(function(){
                    document.getElementsByClassName(obj1)[0].style.backgroundPosition="-"+(256+(time++)*16)*2+"px -192px";
                }
                ,200*(i-1));
            }
            else{
                setTimeout(function(){
                document.getElementsByClassName(obj1)[0].style.backgroundPosition="-"+(256+(--time-1)*16)*2+"px -192px";
                if(time==1 && obj2== "tank")
                {
                    document.getElementsByClassName(obj1)[0].remove();
                    document.getElementsByClassName("tankmove")[0].style.display="inline-block";
                    var hindersInfo={};
                    var hinders=$(".tankmove");
                    hindersInfo.top=hinders.offset().top;
                    hindersInfo.left=hinders.offset().left;
                    hindersInfo.width=parseInt(hinders.width());
                    hindersInfo.height=parseInt(hinders.height());
                    hindersInfo.name=".tankmove";
                    hindersArr.push(hindersInfo);
                }
                else if(time==1 && obj2== "enemy")
                {
                     var temp=document.getElementsByClassName(obj1)[0];
                     var tempTop=(parseInt(temp.style.top)+2)+"px";
                     var tempLeft=(parseInt(temp.style.left)+2)+"px";
                     temp.remove();
                    enemyAppear(tempTop,tempLeft,bianhao);
                }
                }
                ,200*(i-1));
            }
    }
}

//控制自己的坦克
var move=document.getElementsByClassName("tankmove")[0];
move.style.top="452px";
move.style.left="194px";
function  key() {
    var code=event.keyCode;
    var lenTop=(parseInt(move.style.top));
    var lenLeft=(parseInt(move.style.left));
    var temp=4;
    switch(code){
        case 87://上
        case 38:
            lenTop=lenTop-temp;
            move.style.backgroundPosition="-2px -4px";
            move.setAttribute("direction","up");
            break;
        case 83://下
        case 40:
            lenTop=lenTop+temp;
            move.style.backgroundPosition="-130px -2px";
            move.setAttribute("direction","down");
            break;
        case 65: //左
        case 37:
            lenLeft=lenLeft-temp;
            move.style.backgroundPosition="-68px -2px";
            move.setAttribute("direction","left");
            break;
        case 68: //右
        case 39:
            lenLeft=lenLeft+temp;
            move.style.backgroundPosition="-194px -2px";
            move.setAttribute("direction","right");
            break;
        case 74:
            bulletAppear("tankmove");
            break;
    }
    if(lenTop<0)
    {
        lenTop=0;
    }
    else if(lenTop>454)
    {
        lenTop=454;
    }
    if(lenLeft<0)
    {
        lenLeft=0;
    }
    else if(lenLeft>486)
    {
        lenLeft=486;
    }
    move.style.top=lenTop+"px";
    move.style.left=lenLeft+"px";
    rectIntersectsRect(".tankmove");
}

//子弹产生
var numb=0;
function bulletAppear(obj){
    var bulletCreate=document.createElement("div");
    var appear=document.createAttribute("class");
    appear.nodeValue="bullet bullet"+(numb++);
    bulletCreate.attributes.setNamedItem(appear);
    document.getElementById("box").appendChild(bulletCreate);
    bulletMove(obj,appear.nodeValue);
}

//子弹移动
function bulletMove(obj1,obj2){
    var bullet=document.getElementsByClassName(obj2)[0];
    var tank=document.getElementsByClassName(obj1)[0];
    var direction=tank.getAttribute("direction");
    var tankTop=tank.offsetTop;
    var tankLeft=tank.offsetLeft;
    if(direction=="up")
    {
        bullet.style.backgroundPosition="-644px -204px";
        bullet.style.top=(tankTop)+"px";
        bullet.style.left=(tankLeft+8)+"px";
    }
    else if(direction=="down")
    {
        bullet.style.backgroundPosition="-676px -204px";
        bullet.style.top=(tankTop+18)+"px";
        bullet.style.left=(tankLeft+8)+"px";
    }
    else if(direction=="left")
    {
        bullet.style.backgroundPosition="-660px -204px";
        bullet.style.top=(tankTop+8)+"px";
        bullet.style.left=(tankLeft)+"px";
    }
    else{
        bullet.style.backgroundPosition="-692px -204px";
        bullet.style.top=(tankTop+8)+"px";
        bullet.style.left=(tankLeft+18)+"px";
    }
    let i=0;
    var speed=4;
    if (direction == "up") {
        while (i <= parseInt(bullet.style.top)) {
            setTimeout(function () {
                bullet.style.top = (parseInt(bullet.style.top) - speed) + 'px';
                if (parseInt(bullet.style.top) <= 0) {
                    bullet.remove();
                    if(numb>=200) {numb=0;}
                }
                ETD(bullet);
            }
                , 10 * i);
            i = i + speed;
        }
    }
    else if(direction == "down")
    {
        while (i <=(472-parseInt(bullet.style.top))) {
            setTimeout(function () {
                bullet.style.top = (parseInt(bullet.style.top) + speed) + 'px';
                if (parseInt(bullet.style.top) >= 472) {
                    bullet.remove();
                    if(numb>=200) {numb=0;}
                }
                ETD(bullet);
            }
                , 10 * i);
            i = i + speed;
        }
    }
    else if(direction == "left")
    {
        while (i <=parseInt(bullet.style.left)) {
            setTimeout(function () {
                bullet.style.left = (parseInt(bullet.style.left)- speed) + 'px';
                if (parseInt(bullet.style.left) <= 0) {
                    bullet.remove();
                    if(numb>=200) {numb=0;}
                }
                ETD(bullet);
            }
                , 10 * i);
            i = i + speed;
        }
    }
    else 
    {
        while (i <=(504-parseInt(bullet.style.left))) {
            setTimeout(function () {
                bullet.style.left = (parseInt(bullet.style.left)+ speed) + 'px';
                if (parseInt(bullet.style.left) >=504) {
                    bullet.remove();
                    if(numb>=200) {numb=0;}
                }
                ETD(bullet);
            }
                , 10 * i);
            i = i + speed;
        }
    }
}


