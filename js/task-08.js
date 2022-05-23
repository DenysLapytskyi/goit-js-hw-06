
const formElement = document.querySelector('.login-form') 

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;


  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

formElement.addEventListener("submit", handleSubmit);


    
