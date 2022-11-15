function show(divCls) {
	var content = document.querySelector("." + divCls);

	if (content)
		content.style.display = "block";
}