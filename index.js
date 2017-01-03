var game={
	score:0,//保存游戏得分
	state:1,//保存游戏状态
	RUNNING:1,//运行中
	GAMEOVER:0,//游戏结束
	difficulty:0,

//游戏开始
	start:function(){//启动游戏
		this.state=this.RUNNING;//初始化游戏状态
		this.score=0;//初始化游戏分数
		document.getElementById("score").innerHTML=this.score;//初始化显示游戏分数
		this.gameContinue();
	},

	gameContinue:function(){
		//初始化显示样式
	document.getElementById("gameover").style.display=this.state==this.GAMEOVER?"block":"none";
		//初始化颜色值
	var red=this.randomNum();
	var green=this.randomNum();
	var blue=this.randomNum();
	//随机设置input位置
	this.setLocation();
	//将颜色更新到背景颜色中
	this.updateBackgroundView(red,green,blue);
	//更新难度等级
	this.difficulty=this.setDifficulty();
	//设置正确按钮颜色
	this.updateInputView(red,green,blue);
	},
	


//生成位置值
	randomLocation:function(){
		return parseInt(Math.random()*550);
	},
//生成颜色值
	randomNum:function(){
		var num=parseInt(Math.random()*250);
		return num;
	},
//生成背景颜色
	updateBackgroundView:function(r,g,b){
		document.getElementById("main").style.background="rgb("+r+","+g+","+b+")";
		document.getElementById("error").style.background="rgb("+r+","+g+","+b+")";
	},
//生成按钮颜色
	updateInputView:function(r,g,b){
		r+=this.difficulty;
		g+=this.difficulty;
		b+=this.difficulty;
		document.getElementById("input").style.background="rgb("+r+","+g+","+b+")";
	},
//设置难度等级
	setDifficulty:function(difficulty){
		return difficulty=parseInt(120/(this.score+10));
	},
//设置input位置
	setLocation:function(){
		document.getElementById("input").style.top=this.randomLocation()+"px";
		document.getElementById("input").style.left=this.randomLocation()+"px";
	},
//得分
	goal:function(){
		this.score++;
		document.getElementById("score").innerHTML=this.score;
		this.gameContinue();
	},
//失败
	defeat:function(){
		this.state=this.GAMEOVER;
		this.state==this.GAMEOVER&&(document.getElementById("final").innerHTML=this.score);
		document.getElementById("gameover").style.display=this.state==this.GAMEOVER?"block":"none";
	},
	startFirst:function(){
		document.getElementById("gamestart").style.display="none";
	}
}

game.start();
