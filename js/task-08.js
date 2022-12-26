
const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit( event){
 event.preventDefault();
 const {elements: { email, password },} = event.currentTarget;
 if (email.value.trim === '' || password.value === '') {
    return alert (' Please, fill in all the fields')
 }
 const datausers = {email: email.value, password: password.value};
 console.log(datausers);
 event.currentTarget.reset();
 }


