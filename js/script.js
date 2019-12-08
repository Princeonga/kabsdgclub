function openchat(){
	chatdiv = document.getElementById('chat').style.display="block";
}
function closechat(){
	chatdiv = document.getElementById('chat').style.display="none";
}
var checkuserinfo = document.getElementById('checkinfo').addEventListener("click",function(){
	var showuser = document.getElementById('Showdet').style.display = "block";
});
var changeuserinfo = document.getElementById('changeinfo').addEventListener("click",function(){
	var changebox = document.getElementById('Showdet2').style.display = "block";
});
function back(){
	var showuser = document.getElementById('Showdet').style.display = "none";
}
function back2(){
	var showuser = document.getElementById('Showdet2').style.display = "none";
}
var reportuser = document.getElementById('reportuser').addEventListener("click",function(){
	var reportbox = document.getElementById('Showdet3').style.display = "block";
});
function back3(){
	var showuser = document.getElementById('Showdet3').style.display = "none";
}

var accbtn = document.getElementById('acc-btn').addEventListener("click",function(){
	accnum = document.getElementById('accnum').value;
	if(accnum != ""){
		var showuser = document.getElementById('Showdet').style.display = "block";
	}else{
		alert("Please enter an account number");
	}
});

var cal = document.getElementById('cal').addEventListener("click",function(){
	var changebox = document.getElementById('calculator').style.display = "block";
});
function back4(){
	var hidecal = document.getElementById('calculator').style.display = "none";
}

	var calbtn = document.getElementById('calbtn').addEventListener("click",function(){
		var fnum = document.getElementById('fnum').value;
		var lnum = document.getElementById('lnum').value;
		var operator = document.getElementById('operator').value;
		if(fnum || lnum != ""){
			if(operator == 1){
				var answer = fnum + lnum;
				var res = document.getElementById('result').innerHTML = "Answer: "+answer;
			}
			else if(operator == 2){
				var answer = fnum - lnum;
				var res = document.getElementById('result').innerHTML = "Answer: "+answer;
			}
			else if(operator == 3){
				var answer = fnum * lnum;
				var res = document.getElementById('result').innerHTML = "Answer: "+answer;
			}
			else if(operator == 4){
				var answer = fnum / lnum;
				var res = document.getElementById('result').innerHTML = "Answer: "+answer;
			}
		else{
				fnum = 0;
				lnum = 0;
				alert("nothing");
		}
	}
});