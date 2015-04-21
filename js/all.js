//block_1
//点击更换图片
function changeImage(){
element=document.getElementById('myimage')
if (element.src.match("pic_bulboff"))
  {
  element.src="images/pic_bulbon.gif";
  }
else
  {
  element.src="images/pic_bulboff.gif";
  }
}
//block_2
//点击按钮检测年龄
function judgeAge(){
	var age,voteable;
	age=document.getElementById("age").value;
	voteable=(age<18)?"年龄太小":"年龄已达到";
	document.getElementById("show_age").innerHTML=voteable;
}
//block_3
//点击按钮判断星期几
function judgeWeek(){
	var text;
	var day=new Date().getDay();
	switch(day){
		case 0:
			text="today is sunday";
			break;
		case 1:
			text="today is monday";
			break;
		case 2:
			text="today is tuesday";
			break;
		case 3:
			text="today is wednesday";
			break;
		case 4:
			text="today is thursday";
			break;
		case 5:
			text="today is friday";
			break;
		case 6:
			text="today is saturday";
			break;		
	}
	document.getElementById("show_week").innerHTML=text;
}
function judgeWeeked(){
	var text;
	var day=new Date().getDay();
	switch(day){
		case 0:
			text="today is sunday";
			break;
		case 6:
			text="today is saturday";
			break;
		default:
			text="Looking forward to the Weekend";
	}
	document.getElementById("show_weekend").innerHTML=text;
}
//block_4
//点击按钮判断Email是否合法
function judgeEmail(){
	var text=document.getElementById("email_text").value;
	var atpots=text.indexOf("@");
	var dotpots=text.lastIndexOf(".");
	if(atpots<1||dotpots<atpots+2||dotpots+2>text.length){
		document.getElementById("show_result").innerHTML="Not a valid e-mail address";
	}
}
//block_5
//查找最大数
function findMax(){
	var form = document.forms["numfile"],
		num_1 = form["num_1"].value,
		num_2 = form["num_2"].value,
		num_3 = form["num_3"].value;
	var maxnum = Math.max(num_1, num_2, num_3); 
	document.getElementById("show_maxnum").innerHTML = maxnum;
}