const validationInput = document.getElementById('validation-input')


validationInput.addEventListener('blur', eventBlur);

function eventBlur(event) {
    if ( Number(validationInput.dataset.length) === validationInput.value.length) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid')
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }


} 