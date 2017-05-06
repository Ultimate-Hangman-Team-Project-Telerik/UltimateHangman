'use strict';

$(window).on('load', function () {
var root = window.location.href;
var useHash = true; 
var hash = '#!';
var router = new Navigo(root, useHash, hash);


router
 .on('/', function () {
    $('#page-content').load('views/home/home.ejs')
  })

  .on('#register', function () {
    $('#page-content').load('views/account/register.ejs')

  })

  .on('/#home', function () {
    $('#page-content').load('views/home/home.ejs')
  })

  .on('#play', function () {
    $('#page-content').load('views/play/playCategories.ejs')
  })

  .on('/#leaderboard', function () {
    $('#page-content').load('views/leaderboard/leaderboard.ejs')
  })

  .on('#contacts', function () {
   $('#page-content').load('views/contact/contact.ejs')
  })

  .resolve();



}); 