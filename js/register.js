// let yanzheng=document.getElementById("yanzheng");
// 	yanzheng.style.textAlign="center";
// 	yanzheng.style.lineHeight="40px";
	
// 	let input=document.getElementsByTagName("input");
// 	//验证
// 		function show(reg,obj){
// 			if(reg.test(obj.value)){
// 				// obj.nextElementSibling.innerHTML="输入正确";
// 				// obj.nextElementSibling.style.color="green";
// 				return true;
// 			}else{
// 				// obj.nextElementSibling.innerHTML="输入有误";
// 				// obj.nextElementSibling.style.color="red";
// 				return false;
// 			}
// 		}
	
// 		input[0].onblur=function(){
// 			let reg=/^1\d{10}|\w+@\w+\.(com|net|cn)$/;
// 			show(reg,this);
// 		}
		
// 		input[1].onblur=function(){
// 			let reg=/^[a-zA-z0-9]{6,16}$/;
// 			show(reg,this);
// 		}
		
// 		input[2].onblur=function(){
// 			if(input[1].value==input[2].value){
// 				// this.nextElementSibling.innerHTML="输入正确";
// 				// this.nextElementSibling.style.color="green";
// 				return true;
// 			}else{
// 				// this.nextElementSibling.innerHTML="输入有误";
// 				// this.nextElementSibling.style.color="red";
// 				return false;
// 			}
// 		}
		
// 		input[3].onblur=function(){
// 			if(this.value==yanzheng.innerHTML){
// 				// this.parentNode.nextElementSibling.innerHTML="输入正确";
// 				// this.parentNode.nextElementSibling.style.color="green";
// 				return true;
// 			}else{
// 				// this.parentNode.nextElementSibling.innerHTML="输入有误";
// 				// this.parentNode.nextElementSibling.style.color="red";
// 				return false;
// 			}
// 		}
	//验证码
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