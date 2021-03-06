
$(window).on('load', function() {

//DECLARING 

const   header = $('#page-header');
        nav = $('#page-nav'),
        section = $('#page-section'),
        main = $('#page-main'),
        aside = $('#page-aside'),
        footer = $('#page-footer');

//CREATING ELEMENTS

const   div = $('<div>'),
        img = $('<img>'),
        form = $('<form>'),
        input = $('<input>'),
        button = $('<button>'),
        h1 = $('<h1>'),
        ul = $('<ul>'),
        li = $('<li>'),
        a = $('<a>'),
        label = $('<label>'), 
        span = $('<span>');

//INSERTING ELEMENTS IN THE HEADER SECTION

//LOGO
let   logoContainer = $(div).clone(true),
        logo = $(img).clone(true)

$(logo).attr('src', '#');
$(logo).attr('id', 'logo');
$(logo).appendTo(logoContainer);

$(logoContainer).attr('id', 'img-container');
$(logoContainer).attr('class', 'col-xs-2 col-sm-2 col-md-2 col-lg-2');
$(logoContainer).prependTo(header);

//TITLE OR SOMETHING COOL

const   titleContainer = $(div).clone(true),
        title = $(h1).clone(true);

$(title).html('HangMan or something cool');
$(title).attr('id', 'title')
$(title).appendTo(titleContainer);

$(titleContainer).attr('id', 'title-container');
$(titleContainer).attr('class', 'col-xs-7 col-sm-7 col-md-7 col-lg-7');
$(titleContainer).appendTo(header);


//LOG IN/REGISTER FORM

const   loginContainer = $(div).clone(true),
        formLogIn = $(form).clone(true),
        username = $(input).clone(true),
        password = $(input).clone(true),
        signInButton = $(input).clone(true),
        registerButton = $(input).clone(true);

//USERNAME/EMAIL FIELD
$(username).attr('id', 'username');
$(username).attr('type', 'text');
$(username).attr('name', 'username');
$(username).attr('placeholder', 'Username/Email*');
$(username).attr('maxlength', '30');
$(username).attr('required', 'required');
$(username).on('focus', function() {
    this.placeholder = '';
});
$(username).on('blur', function() {
    this.placeholder = 'Username/Email*';
});
$(username).appendTo(formLogIn);

//PASSWORD FIELD
$(password).attr('id', 'password');
$(password).attr('type', 'password');
$(password).attr('name', 'password');
$(password).attr('placeholder', 'Password*');
$(password).attr('maxlength', '30');
$(password).attr('required', 'required');
$(password).on('focus', function() {
    this.placeholder = '';
});
$(password).on('blur', function() {
    this.placeholder = 'Password*';
});
$(password).appendTo(formLogIn);

//SIGN IN BUTTON
$(signInButton).attr('id', 'sign-in');
$(signInButton).attr('type', 'button');
$(signInButton).attr('class', 'btn btn-primary');
$(signInButton).attr('value', 'Sign in')
$(signInButton).appendTo(formLogIn);


//REGISTER BUTTON
$(registerButton).attr('id', 'register');
$(registerButton).attr('type', 'button');
$(registerButton).attr('class', 'btn btn-primary');
$(registerButton).attr('value', 'Register');
$(registerButton).appendTo(formLogIn);

//FORM-CONTAINER
$(formLogIn).attr('id', 'form-login');
$(formLogIn).attr('method', 'POST');
$(formLogIn).attr('action', '#');
$(formLogIn).appendTo(loginContainer);

//LOG IN CONTAINER
$(loginContainer).attr('id', 'login-container');
$(loginContainer).attr('class', 'col-xs-3 col-sm-3 col-md-3 col-lg-3');
$(loginContainer).appendTo(header);

//NAVIGATION
let     navContainer = $(div).clone(true),
        navUl = $(ul).clone(true),   
        arrButtonText = ['home', 'play now', 'ranking', 'contacts'];
        

$(navContainer).attr('id', 'nav-container')

$(navUl).attr('class', 'row');
$(navUl).attr('id', 'nav-ul');

$(arrButtonText).each(function(i){
        let     navLi = $(li).clone(true),
                navImg = $(img).clone(true),
                navLink = $(a).clone(true),
              
                arrButtonImgs = ['../../images/icons/home.png', '../../images/icons/play.png', '../../images/icons/ranking.png', '../../images/icons/contacts.png'];

        $(navLi).attr('class', 'nav-item col-xs-3 col-sm-3 col-md-3 col-lg-3');
       // $(navLi).attr('href', `#${arrButtonText[i]}`);

        $(navImg).attr('src', arrButtonImgs[i]);
        $(navImg).attr('class', 'nav-img .img-responsive');

        $(navLink).html(arrButtonText[i].toUpperCase());
        $(navLink).attr('href', `#${arrButtonText[i]}`);
        $(navLink).attr('class', 'nav-text');

        $(navImg).appendTo(navLi);
        $(navLink).appendTo(navLi);
        $(navLi).appendTo(navContainer);
});

$(navContainer).attr('class', 'col-xs-9 col-sm-9 col-md-9 col-lg-9');
$(navContainer).appendTo(nav);

//SEARCH BAR

let     searchDiv = $(div).clone(true),
        searchForm = $(form).clone(true),
        searchFormGroup = $(div).clone(true),
        searhLabel = $(label).clone(true),
        searchInput = $(input).clone(true),
        searchIcon = $(span).clone(true);


//LABEL
$(searhLabel).attr('for', 'search');
$(searhLabel).attr('class', 'sr-only');
$(searhLabel).html('Search');
$(searhLabel).appendTo(searchFormGroup);

//INPUT FIELD
$(searchInput).attr('type', 'text');
$(searchInput).attr('class', 'form-control');
$(searchInput).attr('name', 'search');
$(searchInput).attr('id', 'search');
$(searchInput).attr('placeholder', 'Search user');
$(searchInput).appendTo(searchFormGroup);

//SEARCH ICON
$(searchIcon).attr('class', 'glyphicon glyphicon-search form-control-feedback' )
$(searchIcon).appendTo(searchFormGroup);

$(searchFormGroup).attr('class', 'form-group has-feedback');
$(searchFormGroup).appendTo(searchForm);

$(searchForm).attr('id', 'search');
$(searchForm).attr('class', 'search-form');
$(searchForm).attr('method', 'GET');
$(searchForm).attr('action', '#');
$(searchForm).appendTo(searchDiv);

$(searchDiv).attr('class', 'col-xs-3 col-sm-3 col-md-3 col-lg-3');
$(searchDiv).attr('id', 'search-div');
$(searchDiv).appendTo(nav);

/*<div class="form-group has-feedback">
            		<label for="search" class="sr-only">Search</label>
            		<input type="text" class="form-control" name="search" id="search" placeholder="search">
              		<span class="glyphicon glyphicon-search form-control-feedback"></span>
            	</div>
*/

//FOOTER


let     footerContainer = $('#page-footer'),
        copirightContainer = $('#footer-copyright'),
        iconContainer = $(div).clone(true),
        arrIconsImgs = ['../../images/icons/facebook.png', '../../images/icons/Youtube.png'];

$(copirightContainer).attr('class', 'col-xs-9 col-sm-9 col-md-9 col-lg-9');


$(arrIconsImgs).each(function(i) {
let     icon = $(img).clone(true),
        iconLink = $(a).clone(true),
        arrLinks = ['https://www.facebook.com', 'https://www.youtube.com/'];

        $(icon).attr('src', arrIconsImgs[i]);
        $(icon).attr('class', 'icon');
        $(iconLink).attr('href', arrLinks[i]);
        $(icon).appendTo(iconLink);
        $(iconLink).appendTo(iconContainer);

})

        $(iconContainer).attr('class',  'col-xs-3 col-sm-3 col-md-3 col-lg-3');
        $(iconContainer).attr('id',  'icon-container');
        $(iconContainer).appendTo(footerContainer);

});