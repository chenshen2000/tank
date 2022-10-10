//障碍物数组
var hindersArr;
//障碍物
var hinders;

function addHinderInfo(){
    hindersArr=[];
    for(let i=0;i<15;i++)
    {
        for(let j=0;j<16;j++)
        {
            let Name=$("."+i+"a"+j);
            if(Name.children().hasClass("redBrick") || Name.children().hasClass("stoneBrick") || Name.children().hasClass("sea"))
            {
                hinders=Name.children();
                var hindersInfo={};
                hindersInfo.top=hinders.offset().top;
                hindersInfo.left=hinders.offset().left;
                hindersInfo.width=parseInt(hinders.width());
                hindersInfo.height=parseInt(hinders.height());
                hindersInfo.name="."+i+"a"+j;
                hindersArr.push(hindersInfo);
            }
        }
    }
}

//障碍物检测

function rectIntersectsRect(obj){
    var tanker=$(obj);
    var tankerTop=tanker.offset().top;
    var tankerLeft=tanker.offset().left;
    var tankerWidth=tanker.width();
    var tankerHeight=tanker.height();
    var tankerName=obj;
    for(let i=0;i<hindersArr.length;i++)
    {
        if(!parseInt(hindersArr[i]['name'].substring(1,2)))
        {
            hindersArr[i]['top']=$(hindersArr[i]['name']).offset().top;
            hindersArr[i]['left']=$(hindersArr[i]['name']).offset().left;
            hindersArr[i]['width']=parseInt($(hindersArr[i]['name']).width());
            hindersArr[i]['height']=parseInt($(hindersArr[i]['name']).height());
        }
        var hinderLeft = hindersArr[i]['left'];       
        var hinderTop = hindersArr[i]['top'];   
        var hinderWidth = hindersArr[i]['width'];     
        var hinderHeight = hindersArr[i]['height']; 
        var hinderName=hindersArr[i]['name'];
        if( tankerName != hinderName && tankerLeft + tankerWidth > hinderLeft && tankerLeft < hinderLeft + hinderWidth && tankerTop + tankerHeight > hinderTop && tankerTop < hinderTop + hinderHeight){
            if(tanker.attr("direction")=="up")
            {
                tanker.css("top",(tanker.position().top+4)+"px");
                if(obj!=".tankmove"){return 3;}
            }
            else if(tanker.attr("direction")=="down")
            {
                tanker.css("top",(tanker.position().top-4)+"px");
                if(obj!=".tankmove"){return 2;}
            }
            else if(tanker.attr("direction")=="left")
            {
                tanker.css("left",(tanker.position().left+4)+"px");
                if(obj!=".tankmove"){return 1;}
            }
            else if(tanker.attr("direction")=="right")
            {
                tanker.css("left",(tanker.position().left-4)+"px");
                if(obj!=".tankmove"){return 0;}
            }
        }
    }
    return -1;
}
