const flags = {
	uppercase: false,
	numbers: false,
	symbols: false,
	length: 5
}

const selectors = {
	copy: 'copy',
	checkbox: 'checkbox',
	slider: 'slider',
	button: 'button',
	sliderValue: document.querySelector('.value'),
	input: document.querySelector('input[type="text"]')
}

const generatePassword = () => {

}

document.querySelector('#app').addEventListener('click', event => {
	switch (event.target.dataset.jsSelector) {
		// Event listener for copy
		case selectors.copy:

			break;

		// Event listeners for checkboxes
		case selectors.checkbox:
			flags[event.target.control.id] = !event.target.control.checked
		break;

		// Event listeners for slider
		case selectors.slider:
			const value = event.target.valueAsNumber

			selectors.sliderValue.innerText = value
			flags.length = value
		break;

		// Event listener for generate button
		case selectors.button:
			selectors.input.value = generatePassword()
		break;
	}
})