function show(divCls) {
	var allContents = document.querySelectorAll(".content");
	for (i = 0; i < allContents.length; i++) {
		allContents[i].style.display = "none";
	}

	var arrows = document.querySelectorAll(".arrow");
	var content = document.querySelector("." + divCls);
	if (content.style.display == "block") {
		content.style.display = "none";
	}
	else {
		content.style.display = "block";
		// arrows.style.transform = "rotate(180deg)";
	}


}


