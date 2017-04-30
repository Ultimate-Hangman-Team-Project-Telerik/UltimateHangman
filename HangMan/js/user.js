$(window).on('load', function() {

'use strict';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_Bkhdn01yb";
const kinveyAppSecret =
"216acbdf6dc14db0892fc58d8cde07ac";
const kinveyAppAuthHeaders = {
'Authorization': "Basic " +
btoa(kinveyAppKey + ":" + kinveyAppSecret),

};

$('#register').click(registerUser);

function registerUser() {
   let userData = {
    username: $('#form-login input[name=username]').val(),
    password: $('#form-login input[name=password]').val()
};
    $.ajax({
    method: "POST",
    url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
    headers: kinveyAppAuthHeaders,
    data: JSON.stringify(userData),
    contentType: "application/json", 
    success: registerSuccess,
    error: ajaxError
    }); 

    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        //CHANGING LAYOUT
        //WHAT TO SHOW
        showInfo('User registration successful.');
    }
    function ajaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
        response.responseJSON.description)
        errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    
        //ADD WELCOME TEXT
        //$('#loggedUserText').text("Welcome, " + username + "!");

}

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function() {
    $('#infoBox').fadeOut();
    }, 3000);
}

function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
} 

}
});

