
// 增加
function adds(btn){
	let count=btn.previousElementSibling.innerHTML;
	count++;
	btn.previousElementSibling.innerHTML=count;
	//小计
	let price=+ btn.parentNode.parentNode.previousElementSibling.childNodes[1].innerHTML;
	// let price=document.getElementById("xiaoji").innerHTML;
	let Money=count*price;
	btn.parentNode.parentNode.nextElementSibling.childNodes[1].innerHTML=Money;
	//共计
	money();
	num();
}

//减少
function deletes(btn){
	let count=btn.nextElementSibling.innerHTML;
	count--;
	btn.nextElementSibling.innerHTML=count;
	//小计
	let price=+btn.parentNode.parentNode.previousElementSibling.childNodes[1].innerHTML;
	let Money=count*price;
	btn.parentNode.parentNode.nextElementSibling.childNodes[1].innerHTML=Money;
	//共计
	money();
	num();
}

//删除
function dels(btn){
	btn.parentNode.parentNode.remove();
	money();
	num();
}

// 共计
	function money(){
		let inpus=document.getElementsByClassName("inpus");
		for(let i=0;i<inpus.length;i++){
			if(inpus[i].checked){
				// let xj=document.getElementById("xiaoji");
				let xj=document.getElementsByClassName("xiaoji");		
				let xjs=0;
				for(let i=0;i<xj.length;i++){
					xjs=+xj[i].childNodes[1].innerHTML + xjs;
				}
				let table=document.getElementsByTagName("table")[0];
				table.rows[table.rows.length-1].cells[0].firstElementChild.childNodes[1].childNodes[3].innerHTML=xjs;
			}
		
		}
	
	}
	
	money();
	// for(let j=0;j<inpus.length;j++){
	// 	if(inpus[j].checked){
	// 		money();
	// 	}
	// }
	
	
	//件数
		function num(){
			let shuliang=document.getElementsByClassName("shuliang");		
			let sls=0;
			for(let i=0;i<shuliang.length;i++){
				sls=+shuliang[i].innerHTML + sls;
			}
			let table=document.getElementsByTagName("table")[0];
			table.rows[table.rows.length-1].cells[0].firstElementChild.childNodes[1].childNodes[1].innerHTML=sls;
		}
		num();
	function fun(){
		let add=document.getElementsByTagName("button");
		// let del=document.getElementById("shanchu");
		let del=document.getElementsByClassName("shanchu");
		// let tj=document.getElementsByClassName("tj");
		let inpus=document.getElementsByClassName("inpus");
		
		// for(let i=0;i<inpus.length;i++){
		// 	inpus[i].onclick=function(){
		// 		if(.checked){
		// 			money();
		// 		}else{
		// 			money();
		// 		}
				
		// 	}
		// }
		for(let i=0;i<add.length;i++){
			if(i%2==1){
				add[i].onclick=function(){
					if(add[i].previousElementSibling.innerHTML<5){
						adds(this);
					}else{
						alert("此商品购买不能超过5件");
					}
				}	
			}else{
				add[i].onclick=function(){
					if(add[i].nextElementSibling.innerHTML<2){
						alert("此商品购买件数最少为1件");
						
					}else{
						deletes(this);
					}
				}
			}
		}
		for(let i=0;i<del.length;i++){
			del[i].onclick=function(){
				dels(this);
			}
		}
		
	}
	fun();