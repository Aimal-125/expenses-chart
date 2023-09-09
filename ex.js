let barHeight1 = document.querySelector(".bar1");
let barHeight2 = document.querySelector(".bar2");
let barHeight3 = document.querySelector(".bar3");
let barHeight4 = document.querySelector(".bar4");
let barHeight5 = document.querySelector(".bar5");
let barHeight6 = document.querySelector(".bar6");
let barHeight7 = document.querySelector(".bar7");
let hover1 = document.querySelector(".hoverDiv1");
let hover2 = document.querySelector(".hoverDiv2");
let hover3 = document.querySelector(".hoverDiv3");
let hover4 = document.querySelector(".hoverDiv4");
let hover5 = document.querySelector(".hoverDiv5");
let hover6 = document.querySelector(".hoverDiv6");
let hover7 = document.querySelector(".hoverDiv7");
function Func() {
	fetch("./data.json")
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		for(let i of data) {
			barHeight1.style.height = `${data[0]["amount"]}%`;
			barHeight2.style.height = `${data[1]["amount"]}%`;
			barHeight3.style.height = `${data[2]["amount"]}%`;
			barHeight4.style.height = `${data[3]["amount"]}%`;
			barHeight5.style.height = `${data[4]["amount"]}%`;
			barHeight6.style.height = `${data[5]["amount"]}%`;
			barHeight7.style.height = `${data[6]["amount"]}%`;
		}
		hover1.innerHTML = `$${data[0]["amount"]}`;
		hover2.innerHTML = `$${data[1]["amount"]}`;
		hover3.innerHTML = `$${data[2]["amount"]}`;
		hover4.innerHTML = `$${data[3]["amount"]}`;
		hover5.innerHTML = `$${data[4]["amount"]}`;
		hover6.innerHTML = `$${data[5]["amount"]}`;
		hover7.innerHTML = `$${data[6]["amount"]}`;
	});
}
Func();

let d = new Date();
let e = d.toString().slice(0, 3).toLowerCase();
let days = document.getElementsByClassName("day");
let bars = document.getElementsByClassName("bar");
for(let day = 0; day < days.length; day++) {
	if(days[day].innerHTML == e) {
		for(let bar = 0; bar < bars.length; bar++) {
			bars[day].classList.add("currentDay");
		}
	}
}