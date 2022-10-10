var enemyNumber=20;  //敌人总数目
// var currentNumber=0;  //目前敌人数目
var enemynum=0;  //敌人坦克编号
var flag=0; //防止两个敌人同时出现重叠
//坦克产生之前动画效果
function enemyStartAnimate(){
    var animateCreate=document.createElement("div");
    var animateClass=document.createAttribute("class");
    animateClass.nodeValue="startAnimate enemyAnimate"+(enemynum++);
    var bianhao=enemynum-1;
    animateCreate.attributes.setNamedItem(animateClass);
    document.getElementById("box").appendChild(animateCreate);
    var position=Math.round(Math.random());
    if(flag==1) {
        position=1;
    }
    else if(flag==2)
    {
        position=0;
    }
    if(position==0)
    {
        animateCreate.style.top="0px";
        animateCreate.style.left="0px";
        flag=1;
    }
    else{
        animateCreate.style.top="0px";
        animateCreate.style.left="482px";
        flag=2;
    }
    startAnimation(animateClass.nodeValue,"enemy",bianhao);
}

//敌人产生
function enemyAppear(tempTop,tempLeft,bianhao){
    var enemyCreate=document.createElement("div");
    var enemyClass=document.createAttribute("class");
    enemyClass.nodeValue="enemy enemy"+(bianhao);
    enemyCreate.attributes.setNamedItem(enemyClass);
    var bulletDirectionClass=document.createAttribute("direction");
    bulletDirectionClass.nodeValue="down";
    enemyCreate.attributes.setNamedItem(bulletDirectionClass);
    enemyCreate.style.top=tempTop;
    enemyCreate.style.left=tempLeft;
    document.getElementById("box").appendChild(enemyCreate);
    var hindersInfo={};
    let string=""+enemyClass.nodeValue;
    string="."+string.substring(6)
    var hinders=$(string);
    hindersInfo.top=hinders.offset().top;
    hindersInfo.left=hinders.offset().left;
    hindersInfo.width=parseInt(hinders.width());
    hindersInfo.height=parseInt(hinders.height());
    hindersInfo.name=string;
    hindersArr.push(hindersInfo);
    enemyMove(enemyCreate,enemyClass);
}

//敌人自动移动并发射子弹
function enemyMove(obj,obj2){
    var enemyDirection=0;
    setInterval(function(){
        switch(enemyDirection)
        {
            case 0:
                obj.style.backgroundPosition="-386px -2px";
                obj.style.top=(parseInt(obj.style.top)+4)+"px";
                obj.setAttribute("direction","down");
                break;
            case 1:
                obj.style.backgroundPosition="-258px -4px";
                obj.style.top=(parseInt(obj.style.top)-4)+"px";
                obj.setAttribute("direction","up");
                break;
            case 2:
                obj.style.backgroundPosition="-324px -2px";
                obj.style.left=(parseInt(obj.style.left)-4)+"px";
                obj.setAttribute("direction","left");
                break;
            case 3:
                obj.style.backgroundPosition="-450px -2px";
                obj.style.left=(parseInt(obj.style.left)+4)+"px";
                obj.setAttribute("direction","right");
                break;
        }
        if(parseInt(obj.style.top)<0)
        {
            enemyDirection=3;
            obj.style.top="0";
        }
        else if(parseInt(obj.style.top)>454)
        {
            enemyDirection=2;
            obj.style.top="454px";
        }
        if(parseInt(obj.style.left)<0)
        {
            enemyDirection=1;
            obj.style.left="0";
        }
        else if(parseInt(obj.style.left)>486)
        {
            enemyDirection=0;
            obj.style.left="486px";
        }
        let string=""+obj2.nodeValue;
        let directionTemp=rectIntersectsRect("."+string.substring(6));
        if(directionTemp!=-1) {
            enemyDirection=directionTemp;
        }
        bulletAppear(obj2.nodeValue);
    },300);
}

