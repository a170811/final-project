
var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];//閏年
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];//非閏年
var month_name = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];
var holder = document.getElementById("days");//把要存進days的資料用holder
var prev = document.getElementById("prev");//前月按鈕
var next = document.getElementById("next");//下月按鈕
var ctitle = document.getElementById("calendar-title");//要存進月分的資料
var cyear = document.getElementById("calendar-year");//要存進年份的資料
var my_date = new Date(); 
var my_year = my_date.getFullYear();//將預設日期設為今年
var my_month = my_date.getMonth();//將預設日期設這個月
var my_day = my_date.getDate();//將預設日期設為今天
prev.onclick = function(e){//點到上個月
	e.preventDefault();
	my_month--;//月份減一
	if(my_month<0){//如果月份是小於0跳到去年12月
		my_year--;
		my_month = 11;
	}
	refreshDate();//重新獲取這個月的日曆
}
next.onclick = function(e){
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
		str += "<li"+myclass+">"+i+"</li>"; //把現在日期跟顏色的class加入str
	}
	holder.innerHTML = str; //將str(所有日期)顯示出來
	ctitle.innerHTML = month_name[my_month]; //將月份顯示出來
	cyear.innerHTML = my_year; //將年分顯示出來
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
