var c=60;

var game={
	score:0,//定义分数
	state:1,//定义游戏状态
	RUNNING:1,//定义游戏进行
	GAMEOVER:0,//定义游戏结束
	TIMEOVER:0,//定义游戏结束
	difficulty:1,//定义游戏难度

	start:function(){
		if(this.state==0){
			c=60;
			time();
		}
		//初始化
		this.state=this.RUNNING;
		this.score=0;
		this.difficulty=1;
		document.getElementById("gameover").style.display=this.state==this.GAMEOVER?"block":"none";
		document.getElementById("timeover").style.display=this.state==this.TIMEOVER?"block":"none";
		this.gameContinue();
	},
	
	//定义游戏循环
	gameContinue:function(){
		//更新分数
		this.updateView(this.score);
		//更新显示的文字
		this.setFonts(this.difficulty);
	},

	
	//更新分数
	updateView:function(score){
		document.getElementById("score").innerHTML=score;
	},

	//设置更新的文字
	setFonts:function(difficulty){
		var n=parseInt(Math.random()*100);
		var all,right;
		switch(difficulty){
			case 1:all="有";right="冇";break;
			case 2:all="时";right="吋";break;
			case 3:all="米";right="来";break;
			case 4:all="査";right="查";break;
			case 5:all="茶";right="筡";break;
			case 6:all="王";right="玉";break;
			case 7:all="薇";right="䉠";break;
			case 8:all="伟";right="玮";break;
			case 9:all="眯";right="咪";break;
			case 10:all="科";right="料";break;
			case 11:all="强";right="強";break;
			case 12:all="大";right="太";break;
			case 13:all="宜";right="冝";break;
			case 14:all="忠";right="思";break;
			case 15:all="宇";right="字";break;
			case 16:all="杭";right="抗";break;
			case 17:all="开";right="升";break;
			case 18:all="恩";right="思";break;
			case 19:all="锋";right="烽";break;
			case 20:all="敏";right="勄";break;
			case 21:all="卢";right="芦";break;
		};
		var divs=document.querySelectorAll("#main>div");
		for(var i=0;i<100;i++){
			divs[i].innerHTML=all;
		divs[i].setAttribute("onclick","javascript:game.wrong();");
		}
		divs[n].innerHTML=right;
		divs[n].setAttribute("onclick","javascript:game.right();");
	},
	
	//设置正确选项
	right:function(){
		this.score++;
		this.difficulty++;
		this.gameContinue();
	},
	//设置游戏结束
	wrong:function(){
		stop();
		this.state=this.GAMEOVER;
		this.state==this.GAMEOVER&&(document.getElementById("final").innerHTML=this.score);
		document.getElementById("gameover").style.display=this.state==this.GAMEOVER?"block":"none";
	},
	//开始游戏按钮
	startFirst:function(){
		document.getElementById("gamestart").style.display="none";
		c=60;
		time();
	},

	//游戏结束2：时间到
	timeover:function(){
		stop();
		this.state=this.TIMEOVER;
		this.state==this.TIMEOVER&&(document.getElementById("final2").innerHTML=this.score);
		document.getElementById("timeover").style.display=this.state==this.TIMEOVER?"block":"none";
	},

}

function time(){
	document.getElementById("gamePause").style.display="none";
	document.getElementById('time').innerHTML=c+"秒";
	c--;
	if(c==0){
		c=-1;
		game.timeover();
	}else{
	t=setTimeout("time()",1000);
	}
}
function stop(){
	clearTimeout(t);
}
function pause(){
		clearTimeout(t);
		document.getElementById("gamePause").style.display="block";
}

game.start();