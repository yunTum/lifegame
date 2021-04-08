
class rocket{
    constructor(x, y){
        this.canvas = null;
        this.ctx = null
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.totalX = 0;
        this.totalY = 0;
        this.hitX = 5;
        this.hitY = 5;
        this.deltaVx = 0;
        this.deltaVy = 0;
    }
    create(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.hitX, this.hitY);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    }
    move(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.hitX, this.hitY);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    }
    clear(){
        this.ctx.clearRect(this.x, this.y, this.hitX, this.hitY);
    }
    get coord() {
        return [this.x, this.y];
      }
}

const myRocket = new rocket(100, 200);

function status_confirm(){
    document.getElementById("status").innerHTML=myRocket.coord;
}

function move_myrocket(){
    myRocket.clear();
    myRocket.x += 10;
    myRocket.y += 0;
    myRocket.move();
}

//ページ読込終了時
window.onload = ()=>{
    myRocket.canvas = document.getElementById("mycanvas");
    myRocket.ctx = myRocket.canvas.getContext("2d");
    myRocket.create();
    update();
  }

  function update(){
    draw();
    window.requestAnimationFrame(update);
  }

  function draw(){
    myRocket.clear();
    myRocket.deltaVx = Number(deltavx_value);
    myRocket.deltaVy = Number(deltavy_value);
    myRocket.totalX = (myRocket.vx + myRocket.deltaVx)
    myRocket.totalY = (myRocket.vy + myRocket.deltaVy)
    if (myRocket.x < 0){
        myRocket.x = 0 + myRocket.hitX;
    }
    else if (myRocket.x > 640){
        myRocket.x = 640 - myRocket.hitX;
    }
    if (myRocket.y < 0){
        myRocket.y = 0 + myRocket.hitY;
    }
    else if (myRocket.y > 480){
        myRocket.y = 480 - myRocket.hitY;
    }
    //if ((myRocket.y < 0) || (myRocket.y) >= 480){
    //    myRocket.stepY *= -1;
    //}
    myRocket.x += myRocket.totalX;
    myRocket.y += myRocket.totalY;
    myRocket.move();
    document.getElementById("status").innerHTML=myRocket.coord;
  }
