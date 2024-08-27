const input = document.getElementById('textInput');

input.addEventListener('keydown', function(event) {
    console.log('Phím vừa được nhấn xuống:', event.key);
});