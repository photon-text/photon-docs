document.addEventListener("DOMContentLoaded", function() {
	const pagedatas = [
		{ file:"introduction.html", title:"Introduction" },
		{ file:"build-the-photon.html", title:"Build the Photon" },
	];

	const tocContainer = document.getElementById("toc");
	const tocList = document.createElement("ul");
	tocContainer.appendChild(tocList)
	// tocList.style.listStyle("None");
	for (var pagedata in pagedatas) {
		var file = pagedatas[pagedata].file;
		var title = pagedatas[pagedata].title;
		console.log(title);
		
		var listItem = document.createElement("li");
		var link = document.createElement("a");
		link.textContent = title;
		link.href = file;
		listItem.appendChild(link);
		tocList.appendChild(listItem);
			var headers = document.querySelectorAll("h2","h3","h4","h5","h6");
			console.log(headers);
			headers.forEach( (header) => {
				console.log(header.nodeName);
				console.log(location.href.substring(location.href.lastIndexOf("/")+1,location.href.length));
				if (location.href.substring(location.href.lastIndexOf("/")+1,location.href.length) === file ){
				if (header.nodeName === "H2") {
					var subLink = document.createElement("a");
					var tul = document.createElement("ul");
					var tli = document.createElement("li");
					tocList.appendChild(tul);
					tul.appendChild(tli);
					subLink.textContent = header.textContent;
					subLink.href = file + "#" + header.textContent;
						tli.appendChild(subLink);
					}
				}
			})
	}
})
