 const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
}
 
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.output.textContent === ' ') {
        refs.output.textContent = 'Anonymous';
    } else { refs.output.textContent = event.currentTarget.value }
          
}