// CLASSE DE UM SPRITE 
function Sprite(){
	this.x = 150;
	this.y = 400;
	this.vx = 0;
	this.vy = 0;
	this.ax = 0;
	this.ay = 0;
	this.w = 30;
	this.h = 40;
	this.cont = 0;
	this.tiros = [];
	this.tiro = false;
	this.mover = function(dt, g){
		this.ax -= 0.5*(this.vx);
		this.vx = this.vx + this.ax*dt;
		this.x = this.x + this.vx*dt;
		
		this.ay += 0.5*(this.vy);
		this.vy = this.vy + g*dt;
		this.y = this.y + this.vy*dt;
	};
	this.desenhar = function(ctx){
		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgb(250, 150, 150)";
		ctx.beginPath();
		ctx.moveTo(this.x,30+this.y);
		ctx.lineTo(20+this.x,30+this.y);
		ctx.lineTo(10+this.x,this.y);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	};
	this.controlar = function(){
	};
	this.colidiuCom = function (alvo) {
		if (this.x > alvo.x + alvo.w ||
		    this.x + this.w < alvo.x ||
		    this.y > alvo.y + alvo.h ||
		    this.y + this.h < alvo.y )
			return false;
		return true; 
	};
};
