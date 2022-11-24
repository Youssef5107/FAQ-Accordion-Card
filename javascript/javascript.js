function add_removeclass(clickedItem) {
	var contents = document.querySelectorAll(".main-idea");

	for (i = 0; i < contents.length; i++) {
		contents[i].classList.remove("active");
	}

	if (clickedItem.classList.contains("active")) {
		clickedItem.classList.remove("active")
	}
	else {
		clickedItem.classList.add("active");

	}
}