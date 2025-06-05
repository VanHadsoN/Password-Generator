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

document.querySelector('#app').addEventListener('click', event => {
	switch (event.target.dataset.jsSelector) {
		// Event listener for copy
		case selectors.copy:

			break;

		// Event listeners for checkboxes
		case selectors.checkbox:

			break;

		// Event listeners for slider
		case selectors.slider:

			break;

		// Event listener for generate button
		case selectors.button:

			break;
	}
})