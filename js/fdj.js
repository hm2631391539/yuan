class  Magnifier{
					constructor(newSmallBox,newBigBox,newMask) {
					       this.smallBox = newSmallBox;
					       this.bigBox = newBigBox;
					      	this.mask = newMask;
					}
					// 鼠标划入bigBox/mask 显示
					onmouseover(){
						let that = this;
						this.smallBox.onmouseover = function(){
						that.bigBox.style.display = "block";
						that.mask.style.display = "block";
								}
							}
					// 鼠标划出bigBox/mask 隐藏
					onmouseout (){
						let that=this;
						this.smallBox.onmouseout=function  () {
							that.bigBox.style.display="none"
							that.mask.style.display="none"
						}
					}
					
					
					onmousemove(){
						let that=this;
						this.smallBox.onmousemove=function(evt){
							let e=evt ||event;
							// this.mask位置定位并设置鼠标指针在其中间
							let left=e.pageX-that.smallBox.offsetLeft-that.mask.offsetWidth/2;
							let top=e.pageY-that.smallBox.offsetTop-that.mask.offsetHeight/2;
							// 小图片移动时，大图片也跟着移动
							let x=that.bigBox.offsetWidth*left/that.mask.offsetWidth;
							let y=that.bigBox.offsetHeight*top/that.mask.offsetHeight;
							// 设置边界
							if(left<0){
								left=0;
							}
							let maxleft=that.smallBox.offsetWidth-that.mask.offsetWidth;
							  if(left>maxleft){
								  left=maxleft;
							  }
							if(top<0){
								top=0;
							}
							let maxtop=that.smallBox.offsetHeight-that.mask.offsetHeight;
							  if(top>maxtop){
								  top=maxtop;
							  }
							  // mask(放大镜)跟随鼠标移动
							  that.mask.style.left=left+"px"
							  that.mask.style.top=top+"px"
							// 设置背景图方向为反方向
							  that.bigBox.style.backgroundPositionX = -x + "px";
							  that.bigBox.style.backgroundPositionY = -y + "px";
						}
					}
					
			             // 封装行为
					getEvent(){
								this.onmouseover();
								this.onmouseout();
								this.onmousemove();
							}
					
				}
				 	let oSmallBox = document.querySelector("#bag");
				 	let oBigBox = document.querySelector("#min");
				 	let oMask = document.querySelector("#mins");
				 	
				 	let mf = new Magnifier(oSmallBox,oBigBox,oMask);
				 	
				 	mf.getEvent();
	