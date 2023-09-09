var count1 = 0,
	count2 = 0,
	count = 0,
	diff1 = 1,
	diff2 = 1,
	night = true;

function add(xx) {
	getValue();
	if (xx == 1) {
		count1 += diff1;
		count = count1;
	} else {
		count2 += diff2;
		count = count2;
	}
	document.querySelector("#value" + xx).innerHTML = count;
	if (count >= 0) {
		document.querySelector("#value" + xx).style.color = "green";
	}
}
function min(xx) {
	getValue();
	if (xx == 1) {
		count1 -= diff1;
		count = count1;
	} else {
		count2 -= diff2;
		count = count2;
	}
	document.querySelector("#value" + xx).innerHTML = count;
	if (count < 0) {
		document.querySelector("#value" + xx).style.color = "red";
	}
}

function res(xx) {
	if (xx == 1) {
		count1 = 0;
		count = count1;
	} else {
		count2 = 0;
		count = count2;
	}

	document.querySelector("#value" + xx).innerHTML = count;
	document.querySelector("#value" + xx).style.color = "green";
	document.querySelector("#iValue" + xx).value = 1;
}

function getValue(xx) {
	diff1 = parseInt(iValue1.value);
	diff2 = parseInt(iValue2.value);
}

function mode() {
	if (night == true) {
		night = false;
		document.querySelector("body").style.backgroundColor = "#333";
		document.querySelector("body").style.color = "#fff";
		document.querySelector("#mode-btn").innerHTML = "Light mode";
	} else {
		night = true;
		document.querySelector("body").style.backgroundColor = "#ccc";
		document.querySelector("body").style.color = "#000";
		document.querySelector("#mode-btn").innerHTML = "Dark mode";
	}
}