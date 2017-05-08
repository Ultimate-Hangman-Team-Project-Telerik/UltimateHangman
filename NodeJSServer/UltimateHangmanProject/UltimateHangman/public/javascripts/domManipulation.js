
$(window).on('load', function () {
    
    
   
$('#username').on('focus', function () {
        this.placeholder = '';
});

$('#username').on('blur', function () {
        this.placeholder = 'Username/Email*';
});


$('#password').on('focus', function () {
        this.placeholder = '';
});

$('#password').on('blur', function () {
    this.placeholder = 'Password*';
});

 
$('#register').attr('onclick', 'window.location.href="/#register"');
  $('#register').on('click', function(e) {
        e.preventDefault()
    })

$('#ranking').attr('onclick', 'window.location.href="/#leaderboard"')
$('#ranking').on('click', function(e) {
    e.preventDefault();
    $.ajax({ 
        url: ("/users/getLeaderboard"),
        type: "GET",
        success: function(success) {
            console.log(e)
        },
        error: function(error) {
            console.log(error);    
        }
     });
}); 

$("#contactSend").on ('click', (function(){      
        var sendFrom = $("#contactEmail").val();
        var subject = $("#contactSubject").val();
        var message = $("#contactMessage").val();

       // $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
        }

});
    }));

});