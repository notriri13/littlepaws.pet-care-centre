
var loginModal = document.getElementById('loginModal');
var registerModal = document.getElementById('registerModal');


var loginBtn = document.getElementById('loginBtn');
var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');


var spans = document.getElementsByClassName('close');


loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}


registerLink.onclick = function(event) {
    event.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
}


loginLink.onclick = function(event) {
    event.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
}


for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }
}


window.onclick = function(event) {
    if (event.target == loginModal || event.target == registerModal) {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }
}
