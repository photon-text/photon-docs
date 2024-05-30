const button = document.getElementById('button');
button.addEventListener('click', stylized);

function stylized() {
	var styleTag = document.createElement('style'); 
	
	styleTag.textContent = `
body {
	background: #7a7a7a;
	color: #000000;
	font-family: null;
	text-align: center;
}
p {
	text-align: left;
	color: #292929;
}
a {
	color: #0300cf;
	text-decoration: underline;
}
div#toc.toc-container {
	background: #5e5e5e;
}
#Dad {
	background: linear-gradient(
		to right,
		rgb(100, 100, 100) 20px,
		rgba(100, 100, 100) 20px
	);
	border-radius: 0px;
	box-sizing: border-box;
	width: 100%;
	height: 20%;
}
#Dad p:first-child {
	font-size: 15px;
	color: red;
	font-weight: bold;
}
#Dad p {
	text-align: left;
	text-indent: 30px;
	color: rgb(255, 97, 97);
	font-size: medium;
	font-weight: lighter;
}

#Wad {
	background: linear-gradient(
		to right,
		rgb(100, 100, 100) 20px,
		rgba(100, 100, 100) 20px
	);
	border-radius: 0px;
	box-sizing: border-box;
	width: 100%;
	height: 20%;
}
#Wad p:first-child {
	font-size: 15px;
	color: yellow;
	font-weight: bold;
}
#Wad p {
	text-align: left;
	text-indent: 30px;
	color: rgb(255, 255, 119);
	font-size: medium;
	font-weight: lighter;
}

#Tad {
	background: linear-gradient(
		to right,
		rgb(100, 100, 100) 20px,
		rgba(100, 100, 100) 20px
	);
	border-radius: 7px;
	box-sizing: border-box;
	width: 100%;
	height: 20%;
}
#Tad p:first-child {
	font-size: 15px;
	color: greenyellow;
	font-weight: bold;
}
#Tad p {
	text-align: left;
	text-indent: 30px;
	color: rgb(200, 255, 222);
	font-size: medium;
	font-weight: lighter;
}

`;

	// 3. headタグにstyleタグ追加
	document.head.appendChild(styleTag);
	// var canvas = document.createElement('canvas');
	// var getC = canvas.getContext("2d");
	// window.requestAnimationFrame(anim);
	// function anim() {
	// 	console.log("hi");
	// 	getC.fillRect(0, 0, 150, 150);
	// 	getC.save();
	// 	for 
	// }

}
