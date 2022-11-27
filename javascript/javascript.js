function add_removeclass(clickedItem) {

	//Remove active class from other divs:
	var contents = document.querySelectorAll(".main-idea");
	for (let i = 0; i < contents.length; i++) {
		if (contents[i] != clickedItem)
			contents[i].classList.remove("active");
	}

	//toggle the active class in the clicked item
	if (clickedItem.classList.contains("active")) {
		clickedItem.classList.remove("active");
	}
	else {
		clickedItem.classList.add("active");
	}
}