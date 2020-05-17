function solve(){
	var str = document.getElementById('box').value;

	for(var i = 0; i < str.length ; i++){
		if(str.charAt(i)=="+"||str.charAt(i)=="/"||str.charAt(i)=="*"||str.charAt(i)=="-"){
			break;
		};
	};

	switch(str.charAt(i)){

		case "/":
			var str1 = str.substring(0,i);
			var str2 = str.substring(i+1);
			var num1 = parseInt(str1);
			var num2 = parseInt(str2);
			num = num1/num2;
			break;

		case "*":
			var str1 = str.substring(0,i);
			var str2 = str.substring(i+1);
			var num1 = parseInt(str1);
			var num2 = parseInt(str2);
			var num = num1*num2;
			break;

		case "+":
			var str1 = str.substring(0,i);
			var str2 = str.substring(i+1);
			var num1 = parseInt(str1);
			var num2 = parseInt(str2);
			var num = num1+num2;
			break;

		case "-":
			var str1 = str.substring(0,i);
			var str2 = str.substring(i+1);
			var num1 = parseInt(str1);
			var num2 = parseInt(str2);
			var num = num1-num2;
			break;

		default:
			num = document.getElementById('Show').innerHTML = "You used an invalid operator, Please Try Again";
		};
		document.getElementById('Show').innerHTML = num;
	};
