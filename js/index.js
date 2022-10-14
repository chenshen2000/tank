    var move=document.getElementsByClassName("tankmove")[0];
     move.style.top="7px";
    function moveTop()
    {
        move.style.top="7px";
    }
    function moveBottom()
    {
        move.style.top="47px";
    }
    function  key() {
        var code=event.keyCode;
        switch(code){
			case 87://上
            case 38:
			   moveTop();
			   break;
			case 83://下
            case 40:
				moveBottom();
				break;
            case 74:
                if(move.style.top=="7px")
                {
                    window.location.href="./play.html";
                }
                else{
                    window.location.href="./stageList.html";
                }
		}
    }
    function HIDE(){
        document.getElementById("help").style.display="none";
    }

    function play(){
        window.location.href="./play.html";
    }
    function stageList(){
        window.location.href="./stageList.html";
    }
