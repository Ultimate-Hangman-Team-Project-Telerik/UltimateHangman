
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
        url: "/users/getLeaderboard",
        type: "GET",
        success: function(success) {
            //console.log(success);
            appendTable(success);
        },
        error: function(error) {
            alert('error')
            console.log(error);    
        }
      
     });
}); 

function appendTable(success) {
    var tr = $('<tr>');
    var td = $('<td>');
    var tbody = $('#tbody')

    len = success.data.length;
    console.log(success);

    for(let i = 0; i < len; i += 1) {
        var td1 = $(td).clone(true);
        var td2 = $(td).clone(true);
        var td3 = $(td).clone(true);
        var td4 = $(td).clone(true);
        var tr1 = $(tr).clone(true);


        $(td1).html(i + 1);
        $(td1).appendTo(tr1);
       
        $(td2).html(`${success.data[i].username}`);
        $(td2).appendTo(tr1);

        $(td3).html(`${success.data[i].lvl}`);
        $(td3).appendTo(tr1);
         
        $(td4).html(`${success.data[i].points}`);
        $(td4).appendTo(tr1);

        $(tr1).appendTo(tbody);
    }
}

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

    if ($($("#pageModal .modal-body p")[0]).text().length > 0) {
        $('#pageModal').modal();
    }
    

});