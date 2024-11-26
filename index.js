var signUpBtn = document.querySelector('.btn__sign-up');
var signInBtn = document.querySelector('.btn__sign-in');
var switchForm = document.querySelector('.auth-form__heading2');
var modal = document.querySelector('.modal')
var signInForm = document.querySelector('.auth-form.auth-form--sign-in');
var signUpForm = document.querySelector('.auth-form.auth-form--sign-up');
var toggle = true;
signUpBtn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none'
})
signInBtn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none'
})

switchForm.addEventListener('click', formToggle
)
function formToggle() {
    if (signUpForm.style.display === 'block') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    } else  {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    }
}
