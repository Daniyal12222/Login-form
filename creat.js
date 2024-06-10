

////            Create Account   /////

// Get //
let c_Eye = document.getElementById('C_icon');
let C_first = document.getElementById('first');
let C_last = document.getElementById('last');
let C_email = document.getElementById('C_email');
let C_pass = document.getElementById('C_pass');
let c_Creat = document.getElementById('creat');



// creat  button function //


function Create() {
    localStorage.setItem('name', C_first.value)
    localStorage.setItem('last', C_last.value)
    localStorage.setItem('email', C_email.value)
    localStorage.setItem('pass', C_pass.value)
    localStorage.setItem('isLoggedIn', 'true')


    window.location.href = 'index.html'
}

///        icon   ///

function icon() {
  
    console.log('chal');
    if (C_pass.type == 'password') {
        C_pass.type = 'text'
        c_Eye.src = 'icon/open-eye.png'
        // console.log('text');

    } else {
        C_pass.type = 'password'
        c_Eye.src = 'icon/eye.png'

    }

}

