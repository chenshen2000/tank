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
}

//爆炸检测
function ETD(obj){
    var bulleter=$(obj);
    console.log(obj)
    var bulleterTop=bulleter.offset().top;
    var bulleterLeft=bulleter.offset().left;
    var bulleterWidth=bulleter.width();
    var bulleterHeight=bulleter.height();
    var bulleterName=obj;
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
            $(bulleterName).remove();
            $(burstName).remove();
            burstArr.splice(i,1);
            for(let j=0;j<burstArr.length;j++)
            {
                if(bulleterName==burstArr[j]['name'])
                {
                    burstArr.splice(j,1);
                }
            }
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