
const inputText = document.getElementById('inputText');
const output = document.getElementById('output');

inputText.addEventListener('input', function() {
    const text = inputText.value;

    if (isValidUrl(text)) {
        inputText.style.borderColor = 'green';
        output.innerText = 'true';
        output.style.color = 'green';
    } else if (isValidEmail(text)) {
        inputText.style.borderColor = 'green';
        output.innerText = 'true';
        output.style.color = 'green';
    } else {
        inputText.style.borderColor = 'red'; 
        output.innerText = 'false';
        output.style.color = 'red';
    }
});

function isValidUrl(text) {
    const urlPattern = /(http|https):\/\/[\w\-\.]+\.\w{2,}(\/\S*)?/;
    return urlPattern.test(text);
}

function isValidEmail(text) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    return emailPattern.test(text);
}

