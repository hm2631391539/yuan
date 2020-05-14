let huan=document.getElementById("huan");
		huan.onclick=function(){
			yanz();
		}
		yanz();
		function yanz(){
			let arr=[];  //存值
			for(i=0;i<4;i++){
				a=parseInt(Math.random()*10+48);
				b=parseInt(Math.random()*25+65);
				c=parseInt(Math.random()*25+97);
				
				a1=String.fromCharCode(a);
				b1=String.fromCharCode(b);
				c1=String.fromCharCode(c);
				
				x=parseInt(Math.random()*3)+1;
				switch(x){
					case 1:
						s=a1;
						arr += s;
						break;
					case 2:
						s=b1;
						arr += s;
						break;
					case 3:
						s=c1;
						arr += s;
						break;
				}
			}
			let yanzheng  =document.getElementById("yanzheng"); 
			yanzheng.style.textAlign="center";
				yanzheng.style.lineHeight="40px";
			// console.log(arr);
			yanzheng.innerHTML=arr;
		}