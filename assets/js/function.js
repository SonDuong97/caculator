var number1 = 0;
var number2 = 0;
var current = 1;
var result = 0;
var temp = 0;
var i = 0;
var flag = 0;
var check = 0;
var plus_minus = 0;
var clock = 0;
var point = 0;
var fixed = 0;
function clearDisplay() {
	document.getElementById("result").innerHTML = 0;
	number1 = 0;
	number2 = 0;
	result = 0;
	current = 1;
	temp = 0;
	check = 0;
	flag = 0;
	clock = 0;
	point = 0;
}

function showNumber(num) {
	document.getElementById("result").innerHTML = num;
}


function increaseNum(n) {
		return n * 10 + temp;
}

function sum(num1, num2) {
	return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
}

function mul(num1, num2) {
	return num1 * num2;
}

function div(num1, num2) {
	return num2 == 0 ? NaN : num1 / num2;
}

function reverseSign () {
	if (current == 1) {
		number1 = - number1;
		showNumber(number1)
	} else {
		number2 = - number2;
		showNumber(number2);
	}
	clock = 1;
}

function caculated() {
	if (flag == 1) {
		result = sum(number1, number2);
	} else if (flag == 2) {
		result = sub(number1, number2);
	} else if (flag == 3) {
		result = mul(number1, number2);
	} else if (flag == 4){
		result = div(number1, number2);
	} else {
		result = number1;
	}
	check = 1;
	showNumber(result);

}

function markOfMath(f) {
	flag = f; 
	point = 0;
	fixed = 0;
	if (current == 2) {
		caculated();
	}

	if (check == 1) {
		number1 = result;
		number2 = 0;
	}

	current = 2;
};

function pressedButton(num) {
	debugger;
	temp = buttonNum[num];
	if (clock == 1 && current == 2) {
		number2 = 0;
	} else if (clock == 1) {
		number1 = 0;
	}

	if (point == 0) {
		if (current == 1) {
			number1 = increaseNum(number1);
			showNumber(number1);
		} else {
			number2 = increaseNum(number2);
			showNumber(number2);
		}
	} else {
		if (current == 1) {
			number1 += temp * point;
			number1.toFixed(fixed);
			fixed++;
			point *= 0.1;
			showNumber(number1);
		} else {
			number2 += temp * point;
			number2.toFixed(fixed);
			point *= 0.1;
			fixed++;
			showNumber(number2);
		}
	}

}

function percent() {
	if (current == 1) {
		number1 = number1 / 100;
	} else {
		number2 = number2 / 100;
	}
}

function pressedPointButton() {
	if (point == 0) {
		point = 0.1;
		fixed = 1;
		if (current == 1) {
			showNumber(number1 + ".");
		} else {
			showNumber(number2 + ".");
		}
	}
}

// Event Processing
var element = document.getElementsByClassName("button");
var num = document.getElementsByClassName("number");
var math = document.getElementsByClassName("math");
var buttonNum = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
var mark = document.getElementsByClassName("mark");

element[0].onclick = function() {clearDisplay()};

document.getElementById("percent").onclick = function() {percent();}
document.getElementById("plus-minus").onclick = function() {
	if (plus_minus == 0) {
		plus_minus = 1;
	} else {
		plus_minus = 0;
	}
}
document.getElementById("point").onclick = function() {pressedPointButton();}


math[0].onclick = function() {reverseSign()};

mark[0].onclick = function() {
	markOfMath(4);
};
mark[1].onclick = function() {
	markOfMath(3);
};
mark[2].onclick = function() {
	markOfMath(2);
};
mark[3].onclick = function() {
	markOfMath(1);
};

document.getElementById("equal-sign").onclick = function() {
	caculated();
}
// number 7
num[0].onclick = function () {
		pressedButton(0);
}
// number 8
num[1].onclick = function () {
		pressedButton(1);
}
// number 9
num[2].onclick = function () {
		pressedButton(2);
}
// number 4
num[3].onclick = function () {
		pressedButton(3);
}
// number 5
num[4].onclick = function () {
		pressedButton(4);
}
// number 6
num[5].onclick = function () {
		pressedButton(5);
}
// number 1
num[6].onclick = function () {
		pressedButton(6);
}
// number 2
num[7].onclick = function () {
		pressedButton(7);
}
// number 3
num[8].onclick = function () {
		pressedButton(8);
}
// number 0
num[9].onclick = function () {
		pressedButton(9);
}
