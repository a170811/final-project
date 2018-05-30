
var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];//閏年
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];//非閏年
var month_name = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
var holder = document.getElementById("days");//把要存進days的資料用holder
var prev = document.getElementById("prev");//前月按鈕
var next = document.getElementById("next");//下月按鈕
var ctitle = document.getElementById("calendar-title");//要存進月分的資料
var cyear = document.getElementById("calendar-year");//要存進年份的資料
var show=document.getElementById("showwater");
var my_date = new Date(); 
var my_year = my_date.getFullYear();//將預設日期設為今年
var my_month = my_date.getMonth();//將預設日期設這個月
var my_day = my_date.getDate();//將預設日期設為今天
var dayshow;//把可以被點的日子存在dayshow
var daily = new Array(40);//存每日喝水百分比
prev.onclick = function(e){//點到上個月
	e.preventDefault();
	my_month--;//月份減一
	if(my_month<0){//如果月份是小於0跳到去年12月
		my_year--;
		my_month = 11;
	}
	refreshDate();//重新獲取這個月的日曆
}
next.onclick = function(e){//點到下個月
	e.preventDefault();
	my_month++;
	if(my_month>11){
		my_year++;
		my_month = 0;
	}
	refreshDate();
}
function refreshDate(){//重新獲取這個月的日曆
	var str = "";
	var totalDay = daysMonth(my_month, my_year); //將總天數存進total
	var firstDay = dayStart(my_month, my_year); //將一號是星期幾存到firstday
	var myclass;//用myclass存文字的樣式
	show.innerHTML ="";
	for(var i=1; i<firstDay; i++){ //從星期一開始
		str += "<li></li>"; //還沒到第一天前先空白
	}
	for(var i=1; i<=totalDay; i++){//從一號開始
		if((i<my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()) || my_year<my_date.getFullYear() || ( my_year==my_date.getFullYear() && my_month<my_date.getMonth())){ 
			myclass = " class='darkgrey'"; //還沒到的日子是lightgrey
		}else if (i==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
			myclass = " class='green greenbox'"; //今天用greenbox
		}else{
			myclass = " class='lightgrey'"; //還沒到的日子是lightgrey
		}
		str += "<li id='day"+i+"'"+myclass+">"+i+"<br><img id='water"+i+"' class='drip' src='../Record_page/a.png'><img id='blank"+i+"' class='drip' src='../Record_page/b.png'></li>"; //把現在日期跟顏色的class加入str
	}
	
	holder.innerHTML = str; //將str(所有日期)顯示出來
	ctitle.innerHTML = month_name[my_month]; //將月份顯示出來
	cyear.innerHTML = my_year; //將年分顯示出來
	for(j=1;j<=totalDay;j++){
		if((j<my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()) || my_year<my_date.getFullYear() || ( my_year==my_date.getFullYear() && my_month<my_date.getMonth())){ 
			daily[j]= Math.random();//存喝水百分比 //要改成取得每日喝水百分比
		}else if (j==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
			daily[j]= Math.random();//存喝水百分比 //要改成取得每日喝水百分比
		}else{
			daily[j]= 0;
		}
		document.getElementById("water"+j).style.position = "absolute";　
		document.getElementById("water"+j).style.clip = "rect("+(4-daily[j]*4)+"vw 4vw 4vw 0vw)";//把藍色水滴切掉
	}
	for(k=1;k<=totalDay;k++){//讓每一天都能被點
		dayshow=document.getElementById("day"+k);//把可以被點的日子存在dayshow
		clickday(dayshow);
	}
	var clcday;
	function clickday(clcday){//點日子
		clcday.onclick=function(){//點的動作
			var clcword=clcday.id;//把點的id存進clcword
			for(m=1;m<=totalDay;m++){//把除了今天以外的框框去掉
				if(m==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
					document.getElementById("day"+m).style.border = "0.05vw solid #3c6dc1";
				}
				else document.getElementById("day"+m).style.border = "0.00";
			}
			document.getElementById(clcword).style.border = "0.05vw solid red";//點的日子加框框
			var clcdaynum =clcword.match(/\d+/g);//取出clcword數值部分
			show.innerHTML =daily[clcdaynum]*100+"%";//顯示喝水百分比
		}
	}
}

function dayStart(month, year) {//一號星期幾
	var tmpDate = new Date(year, month, 1);//用tmpdate存該月第一天
	return (tmpDate.getDay());//回傳tempdate星期幾
}


function daysMonth(month, year) {//這個月有幾天
	var tmp = year % 4;//年份除4餘0就是閏年
	if (tmp == 0) {
		return (month_olympic[month]);//回傳閏年當月天數
	} else {
		return (month_normal[month]);//回傳平年當月天數
	}
}
refreshDate();



