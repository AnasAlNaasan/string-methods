function caces() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let convirt = document.getElementById('convirt').value;
    let result = document.getElementById('result');

    result.setAttribute('class', 'alert alert-danger text-center')

    if (name == "" && email == "" && pass == "" && convirt == "") {
        result.innerHTML = 'Write Data In Form';
        return false;
    } else if (name.length < 3 || name.length > 15) {
        result.innerHTML = 'Maximum Characters From 3 To 15'
        return false;
    } else if (email == '') {
        result.innerHTML = 'Write Your Email'
        return false;
    } else if (email.indexOf('@') == -1 || email.indexOf('.com') == -1) {
        result.innerHTML = 'Write The Correct Email'
        return false;
    } else if (pass.length == '') {
        result.innerHTML = 'Write Password'
        return false;
    } else if (pass.length < 8) {
        result.innerHTML = 'Weak Password. Type More Than Eight Letters'
        return false;
    } else if (convirt == '') {
        result.innerHTML = 'Confirm Password'
        return false;
    }else if (pass != convirt) {
        result.innerHTML = 'The Password Does Not Match The Password Above'
        return false;
    } else {
        return true;
    }

}