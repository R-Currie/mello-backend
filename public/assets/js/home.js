const $setLogin = $('#login');
const $setSignup = $('#signup');
const $submitButton = $('#submit');

let authSetting = 'login';

function setAuth(setting){
    authSetting = setting;
    
    if(authSetting === 'login'){
        $setLogin.addClass('active');
        $setSignup.removeClass('active');
        $submitButton.text('Log In');
    }else{
        $setLogin.removeClass('active');
        $setSignup.addClass('active');
        $submitButton.text("Sign Up");
    }
}

$setLogin.on('click', setAuth.bind(null, 'login'));
$setSignup.on('click', setAuth.bind(null, 'signup'));
