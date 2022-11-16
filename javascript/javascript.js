function show(divCls) {
	var content = document.querySelector("." + divCls);
	for (i = 0; i < divCls.lenght; i++) {
		divCls[i].style.display = "none";
	}

	if (content.style.display == "block") {
		content.style.display = "none";
	}
	else {
		content.style.display = "block";
	}


}


