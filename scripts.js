document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const algorithm = document.getElementById('algorithm').value;
    const length = parseInt(document.getElementById('length').value);
    let outputText = '';

    if (algorithm === 'btoa') {
        outputText = btoa(inputText);
    } else if (algorithm === 'custom') {
        outputText = customEncrypt(inputText, length);
    }

    document.getElementById('outputText').value = outputText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('outputText').value;
    const algorithm = document.getElementById('algorithm').value;
    const length = parseInt(document.getElementById('length').value);
    let outputText = '';

    if (algorithm === 'btoa') {
        outputText = atob(inputText);
    } else if (algorithm === 'custom') {
        outputText = customDecrypt(inputText, length);
    }

    document.getElementById('outputText').value = outputText;
});

function customEncrypt(text, length) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) + length);
    }
    return encrypted;
}

function customDecrypt(text, length) {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        decrypted += String.fromCharCode(text.charCodeAt(i) - length);
    }
    return decrypted;
}
