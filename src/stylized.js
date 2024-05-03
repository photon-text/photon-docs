const button = document.getElementById('button');
button.addEventListener('click', stylized);

function stylized() {
	console.log("hi");
	document.getElementsByTagName('p').style.background = "#b3b3b3";
}
