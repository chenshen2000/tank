 //读文件
 function Clickin(){//点击导入按钮，使files触发点击事件，然后完成读取文件的操作。
    document.getElementById("files").click();
    };

function Import(){
    var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
    var name = selectedFile.name;//读取选中文件的文件名
    var size = selectedFile.size;//读取选中文件的大小
    console.log("文件名:"+name+"大小："+size);

    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile);//读取文件的内容

    reader.onload = function(){
        // console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
        $("#content").append($(this.result));
        //将障碍物添加到数组中
        addHinderInfo();
        //将爆炸物添加到数组中
        addBurstInfo();
         //我方坦克产生
        document.getElementsByClassName("startTank")[0].style.top="450px";
        document.getElementsByClassName("startTank")[0].style.left="192px";
        document.getElementsByClassName("tankmove")[0].style.display="none";
        startAnimation("startAnimate","tank","");

        //敌人坦克产生
        var interval1=setInterval(function(){
            enemyStartAnimate();
            enemyNumber--;
            if(enemynum==2){
                clearInterval(interval1);
            }
        },4000);
        
    };
    $("#map").slideUp();
}