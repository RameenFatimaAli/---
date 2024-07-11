document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let lastAnswer = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (buttonText === 'ENTER') {
                try {

                    const sanitizedInput = currentInput.replace(/x/g, '*');
                    lastAnswer = Function('"use strict";return (' + sanitizedInput + ')')();
                    display.value = lastAnswer;
                    currentInput = lastAnswer.toString();
                } catch (e) {
                    display.value = 'Error';
                    currentInput = '';
                }
            } else if (buttonText === 'del') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else if (buttonText === 'ans') {
                currentInput += lastAnswer;
                display.value = currentInput;
            } else {
                currentInput += buttonText;
                display.value = currentInput;
            }
        });
    });
});
