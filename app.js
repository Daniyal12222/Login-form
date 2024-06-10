
///    login icon  ///

//     get //

let pass = document.getElementById('pass');
let l_email = document.getElementById('email');
let eye = document.getElementById('icon');
let log_B = document.getElementById('log_B')

//    icon       //
function icon() {
    console.log('chal');
    if (pass.type == 'password') {
        pass.type = 'text';
        eye.src = 'icon/open-eye.png';
        // console.log('text');

    } else {
        pass.type = 'password'
        eye.src = 'icon/eye.png'

    }

}

// login   //

let ls_e = localStorage.getItem('email')
let ls_p = localStorage.getItem('pass')

// console.log(l_email);
// console.log(ls_e);
// console.log(pass);
// console.log(ls_p);


function log() {
    if (ls_e == l_email.value && ls_p == pass.value) {
        window.location.href = 'main.html';
    } else {
        if (ls_e != l_email.value) {
            alert('rong email')

        } else {
            alert('rong password')
        }

    }
}













