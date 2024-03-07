const passwordBoxes = document.querySelectorAll('.password');
const passwordError = document.querySelector('#passwordError');
const form = document.querySelector('.form');

window.addEventListener('resize', () => {
    document.querySelector(':root').style
        .setProperty('--windowHeight', window.innerHeight + 'px');
})

function checkPassword()
{
    if (passwordBoxes[0].value != passwordBoxes[1].value && !(passwordBoxes[0].value === '' || passwordBoxes[1].value === ''))
    {
        passwordBoxes.forEach( box => { box.classList.add("error"); });
        passwordError.style.display = 'inline';
        console.log("Error!");
        return true;
    }
    else
    {
        passwordBoxes.forEach( box => { box.classList.remove("error"); });
        passwordError.style.display = 'none';
        console.log("No error");
        return false;
    }
}

function formValidate(form)
{
    form.preventDefault();
    if (checkPassword())
    {
        alert("Please make sure both password fields match!");
        return false;
    }

    window.open("https://youtu.be/dQw4w9WgXcQ", "_self");
}

window.onload = () => {
    passwordBoxes.forEach( box => {
        box.addEventListener("blur", checkPassword);
    })

    form.addEventListener("submit", formValidate);
}