let priceForOne, selectElement, selectedOption, selectedOptionId = 1;
function getSelectedOptionId() {
		// Получение элемента <select>
		selectElement = document.getElementById("mySelect");

		// Получение выбранной опции
		selectedOption = selectElement.options[selectElement.selectedIndex];

		// Получение ID выбранной опции
		selectedOptionId = selectedOption.id;
		console.log("Selected Option ID:", selectedOptionId);
		displayInputValue();
}
let selectedRadio, selectedRadioId = 1;
function getSelectedRadioId() {
	// Получение выбранной радиокнопки
	selectedRadio = document.querySelector('input[name="radioGroup"]:checked');

	// Если есть выбранная кнопка, получите ее ID
	if (selectedRadio) {
		selectedRadioId = selectedRadio.id;
		console.log("Selected Radio ID:", selectedRadioId);
		displayInputValue();
	}
}
let quantity;
function displayInputValue() {
	// 1 product
	if(selectedOptionId == 1 && selectedRadioId == 1){
		priceForOne = 102;
	}
	if(selectedOptionId == 1 && selectedRadioId == 2){
		priceForOne = 95;
	}
	if(selectedOptionId == 1 && selectedRadioId == 3){
		priceForOne = 90;
	}
	if(selectedOptionId == 1 && selectedRadioId == 4){
		priceForOne = 87;
	}
	// 2 product
	if(selectedOptionId == 2 && selectedRadioId == 1){
		priceForOne = 105;
	}
	if(selectedOptionId == 2 && selectedRadioId == 2){
		priceForOne = 85;
	}
	if(selectedOptionId == 2 && selectedRadioId == 3){
		priceForOne = 80;
	}
	if(selectedOptionId == 2 && selectedRadioId == 4){
		priceForOne = 77;
	}
	// 3 product
	if(selectedOptionId == 3 && selectedRadioId == 1){
		priceForOne = 108;
	}
	if(selectedOptionId == 3 && selectedRadioId == 2){
		priceForOne = 88;
	}
	if(selectedOptionId == 3 && selectedRadioId == 3){
		priceForOne = 83;
	}
	if(selectedOptionId == 3 && selectedRadioId == 4){
		priceForOne = 80;
	}
	// 4 product
	if(selectedOptionId == 4 && selectedRadioId == 1){
		priceForOne = 112;
	}
	if(selectedOptionId == 4 && selectedRadioId == 2){
		priceForOne = 92;
	}
	if(selectedOptionId == 4 && selectedRadioId == 3){
		priceForOne = 87;
	}
	if(selectedOptionId == 4 && selectedRadioId == 4){
		priceForOne = 84;
	}
	// 5 product
	if(selectedOptionId == 5 && selectedRadioId == 1){
		priceForOne = 115;
	}
	if(selectedOptionId == 5 && selectedRadioId == 2){
		priceForOne = 95;
	}
	if(selectedOptionId == 5 && selectedRadioId == 3){
		priceForOne = 90;
	}
	if(selectedOptionId == 5 && selectedRadioId == 4){
		priceForOne = 87;
	}
	// 6 product
	if(selectedOptionId == 6 && selectedRadioId == 1){
		priceForOne = 120;
	}
	if(selectedOptionId == 6 && selectedRadioId == 2){
		priceForOne = 99;
	}
	if(selectedOptionId == 6 && selectedRadioId == 3){
		priceForOne = 95;
	}
	if(selectedOptionId == 6 && selectedRadioId == 4){
		priceForOne = 90;
	}

// 7 product
	if(selectedOptionId == 7 && selectedRadioId == 1){
		priceForOne = 170;
	}
	if(selectedOptionId == 7 && selectedRadioId == 2){
		priceForOne = 150;
	}
	if(selectedOptionId == 7 && selectedRadioId == 3){
		priceForOne = 145;
	}
	if(selectedOptionId == 7 && selectedRadioId == 4){
		priceForOne = 140;
	}

// 8 product
	if(selectedOptionId == 8 && selectedRadioId == 1){
		priceForOne = 180;
	}
	if(selectedOptionId == 8 && selectedRadioId == 2){
		priceForOne = 160;
	}
	if(selectedOptionId == 8 && selectedRadioId == 3){
		priceForOne = 155;
	}
	if(selectedOptionId == 8 && selectedRadioId == 4){
		priceForOne = 150;
	}


	quantity = document.querySelector(".quantity").value;

	document.querySelector(".final_sum").innerText = priceForOne * quantity + ' ₽';
	document.querySelector(".price_for_one").innerText = priceForOne + ' ₽';
}