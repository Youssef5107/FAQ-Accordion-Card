function show(divCls) {
	var arrows = document.querySelectorAll("arrow")
	var content = document.querySelector("." + divCls);
	for (i = 0; i < divCls.lenght; i++) {
		content.style.display = "none";
	}

	if (content.style.display == "block") {
		content.style.display = "none";
	}
	else {
		content.style.display = "block";
		arrows.style.transform = "rotate(180deg)";
	}


}


