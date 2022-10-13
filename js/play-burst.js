//爆炸物数组
var burstArr;
//爆炸物
var burst;

function addBurstInfo(){
    burstArr=[];
    for(let i=0;i<15;i++)
    {
        for(let j=0;j<16;j++)
        {
            let Name=$("."+i+"a"+j);
            if(Name.children().hasClass("redBrick") || Name.children().hasClass("stoneBrick") )
            {
                burst=Name.children();
                var burstInfo={};
                burstInfo.top=burst.offset().top;
                burstInfo.left=burst.offset().left;
                burstInfo.width=parseInt(burst.width());
                burstInfo.height=parseInt(burst.height());
                burstInfo.name="."+i+"a"+j;
                burstArr.push(burstInfo);
            }
        }
    }
    burst=$(".home");
    var burstInfo={};
    burstInfo.top=burst.offset().top;
    burstInfo.left=burst.offset().left;
    burstInfo.width=parseInt(burst.width());
    burstInfo.height=parseInt(burst.height());
    burstInfo.name=".home";
    burstArr.push(burstInfo);
    burst=$(".tankmove");
    burstInfo={};
    burstInfo.top=burst.offset().top;
    burstInfo.left=burst.offset().left;
    burstInfo.width=parseInt(burst.width());
    burstInfo.height=parseInt(burst.height());
    burstInfo.name=".tankmove";
    burstArr.push(burstInfo);
}
//全图同时爆炸计数
var burstCount=0;
//爆炸动画
function burstAnimation(obj){
    let bullet=$(obj);
    let currentBurst=$("#box");
    let count=burstCount++;
    currentBurst.append($('<div class="burstAnimation burstAnimation'+count+'"></div>'));
    let burstTop=bullet.position().top-12;
    let burstLeft=bullet.position().left-12;
    bullet.remove();
    document.getElementsByClassName("Burst")[0].play();
    $(".burstAnimation"+count).css({"top":burstTop+"px","left": burstLeft+"px"});
    setTimeout(function(){
        $(".burstAnimation"+count).remove();
    },100)
    
}

//爆炸检测
function ETD(obj){
    var bulleter=$(obj);
    var bulleterTop=bulleter.offset().top;
    var bulleterLeft=bulleter.offset().left;
    var bulleterWidth=bulleter.width();
    var bulleterHeight=bulleter.height();
    var bulleterName=bulleter.attr("class");
    for(let i=0;i<burstArr.length;i++)
    {
        if(!parseInt(burstArr[i]['name'].substring(1,2)))
        {
            burstArr[i]['top']=$(burstArr[i]['name']).offset().top;
            burstArr[i]['left']=$(burstArr[i]['name']).offset().left;
            burstArr[i]['width']=parseInt($(burstArr[i]['name']).width());
            burstArr[i]['height']=parseInt($(burstArr[i]['name']).height());
        }
        var burstLeft = burstArr[i]['left'];       
        var burstTop = burstArr[i]['top'];   
        var burstWidth = burstArr[i]['width'];     
        var burstHeight = burstArr[i]['height']; 
        var burstName=burstArr[i]['name'];
        if( bulleterName != burstName && bulleterLeft + bulleterWidth > burstLeft && bulleterLeft < burstLeft + burstWidth && bulleterTop + bulleterHeight > burstTop && bulleterTop < burstTop + burstHeight){
            let string=""+burstName;
            string=string.substring(1,2);
            let string2=""+bulleterName;
            string2=string2.substring(0,1);
            burstAnimation(obj);
            if($(burstName).children().hasClass("stoneBrick"))
            {
                continue;
            }
            if(string=="e" && string2=="e")
            {
                continue;
            }
            if(string=="t" && string2=="b")
            {
                continue;
            }
            $(burstName).remove();
            if(string=="e")
            {
                clearInterval(burstArr[i]['settime']);
                currentNumber--;
                $(".enemyCount").text("敌人坦克剩余： "+(enemyNumber+currentNumber));
            }
            if(string=="h" || string=="t")
            {
                alert("game over!");
                window.location.href="./play.html";
            }
            burstArr.splice(i,1);
            for(let j=0;j<hindersArr.length;j++)
            {
                if(burstName==hindersArr[j]['name'])
                {
                    hindersArr.splice(j,1);
                }
            }
        }
    }
}

