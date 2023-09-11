function univ_sign(){
   
    document.getElementById("univ").style.display = "block"
    document.getElementById('indiv_nfirst').style.display = "none"
    document.getElementById('indiv_nlast').style.display = "none"
}

function indiv_sign(){
    document.getElementById('indiv_nfirst').style.display = "block"
    document.getElementById('indiv_nlast').style.display = "block"
    document.getElementById("univ").style.display = "none"

}


const form = document.getElementById("myForm")

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const emailInput = form.elements['email'];
    const passwordInput = form.elements['password']
    const usernameInput = form.elements['Username']

    const email = emailInput.value;
    const password = passwordInput.value;
    const username = usernameInput.value;

    const newUser = {
       // username: username,
        email: email,
        password: password
      };

    alert(JSON.stringify(newUser))

    fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });

    alert("fetch complete")
    return true
}).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error))


const lform = document.getElementById


