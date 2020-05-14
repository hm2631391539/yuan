<?php
	header("Content-type：text/html;charset=uft-8");
	
	$username=$_GET['username'];
	
	$conn=mysql_connect("localhost","root","root");
	
	if(!$conn){
		echo "出错了";
	}else{
		mysql_select_db("my1912",$conn);
		
		$sqlstr="select * from vip where username='$username'";
		$result=mysql_query($sqlstr,$conn);
		
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){
			echo "1";
		}else{
			echo "0";
		}
	}
?>