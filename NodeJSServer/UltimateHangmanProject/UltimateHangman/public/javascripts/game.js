'use strict';
$(window).on('load', function () {

let startLevelGame = 1;

$('#play-game').attr('onclick', 'window.location.href="/#play"')

$('#play-game').on('click', function(e) {
    e.preventDefault();
    startLevelGame = 1;
    startLevel(startLevelGame)

});

function startLevel(startLevelGame) {
    startLevelGame = startLevelGame;
    window.setTimeout(function(){
        $('svg').attr('class', 'hidden');
        $('#win').attr('class', 'hidden');
        $('#keyboard').attr('class', 'hidden');
        $('#play-again').attr('class', 'hidden');
        $('.area').remove();
        $('.letter-button').remove();
        $('#head').attr('cx', '150');
        $('#head').attr('cy', '60');
        $('#head').attr('class', 'hidden');
        $('#body').attr('x2', '150');
        $('#body').attr('class', 'hidden');
        $('#leftHand').attr('x2', '90');
        $('#leftHand').attr('class', 'hidden');
        $('#rightHand').attr('x2', '210');
        $('#rightHand').attr('class', 'hidden');
        $('#leftLeg').attr('x2', '90');
        $('#leftLeg').attr('class', 'hidden');
        $('#rightLeg').attr('x2', '210');
        $('#rightLeg').attr('class', 'hidden');
        $('#choose-area').removeClass('hidden');


        let btn = $('<input>');
        let categories;
      
        if(startLevelGame === 1) {
            categories = ['maths', 'history', 'geography', 'programming', 'movies', 'fruits/vegetables'];
        }
        if(startLevelGame === 2) {
            categories = ['maths', 'history', 'geography', 'programming', 'movies'];
        }
        if(startLevelGame === 3) {
            categories = ['maths', 'history', 'geography', 'programming', 'movies'];
        }
        if(startLevelGame === 4) {
            categories = ['maths', 'history', 'geography', 'programming'];
        }
        if(startLevelGame === 5) {
            categories = ['maths', 'history', 'geography', 'programming', 'movies', 'proverbs'];
        }

        let len = categories.length;
        let chooseArea = $('#choose-area')
    
        for(let i = 0; i < len; i += 1) {
            let button = $(btn).clone(true);
        
            $(button).attr('id', categories[i]);
            $(button).attr('class', 'area btn-lg');
            $(button).attr('type', 'button');
            $(button).attr('value', (categories[i].toUpperCase()));
            $(button).appendTo(chooseArea);
      }

       $('.area').on('click', function(e) {
        e.preventDefault();
        let target = e.target;
        let valueBtn = e.target.value;
        
        $('#choose-area').attr('class', 'hidden');
        $('#guess-the-word').removeClass('hidden')
        $('#keyboard').removeClass('hidden')
        $('svg').removeClass('hidden')
        startGame(valueBtn, startLevelGame);
});
           }, 50);

 };


function playAgain() {
     $('#keyboard').attr('class', 'hidden');
     $('#guess-the-word').attr('class', 'hidden');
     $('#play-again').removeClass('hidden');

    $('#yes').on('click', function() {
       
        startLevelGame = 1;
        startLevel(startLevelGame);
    })

    $('#no').on('click', function() {
    $('#play-again').attr('class', 'hidden');
    $('#keyboard').removeClass('hidden');
    })
}

function win(startLevelGame) {
    $('#keyboard').attr('class', 'hidden');
    $('#guess-the-word').attr('class', 'hidden');
    $('#win').removeClass('hidden');

    $('#yes-win').on('click', function() {
       startLevelGame += 1;
        startLevel(startLevelGame);

    })

    $('#no-win').on('click', function() {
    $('#play-again').attr('class', 'hidden');
    $('#keyboard').removeClass('hidden');
    })
}

function startGame(value, startLevelGame){
    let valueBtn = value.toLowerCase();
    let level = startLevelGame;

    $('#level').html(level);
    $('#category').html(valueBtn);

    $.ajax({
        url: "/level/getLevel",
        type: "GET",
        data: {
            wordPackageValue: `${valueBtn}`,
            lvlValue: `${level}`
            },
            success: function(data) {
                guessTheWord(data);
              },
        error: function(error) {
            console.log(error);    
        }
     });
}

function guessTheWord(data) {
    let game = $('#game-container');
    let randomWord = data.data.currentWord.toUpperCase();
    let guessWord = [];
    console.log(randomWord);

let arrGuessWord = randomWord.split('');

let len = arrGuessWord.length;

    for(let i = 0; i < len; i += 1) {
        if(arrGuessWord[i].match(/[a-z]/gi) !== null) {
            guessWord[i] = '_';
        } else {
             guessWord[i] = '  ';
        }
    }


$('#guess-the-word').html(guessWord);

let keyboarArea = $('#keyboard')

let alphabetString = "abcdefghijklmnopqrstuvwxyz",
    alphabet = alphabetString.split('');

for(let i = 0; i < alphabet.length; i += 1) {
    let input = $('<input>');

    $(input).attr('type', 'button');
    $(input).attr('value', alphabet[i].toUpperCase());
    $(input).attr('class', 'letter-button btn');
    $(input).appendTo(keyboarArea)
}

let btnLettersList = $('.letter-button');
  let wrong = 6;

$(btnLettersList).on('click', function(ev) {
    let value = ev.target.value,
        target = ev.target;
    
    function locations(substring,string){
        let index=[],
            i=-1;

        while((i=string.indexOf(substring,i+1)) >= 0) index.push(i);
        return index;
    }
   
   let indexes = locations(value, arrGuessWord);
 

   if(indexes.length > 0) {
        for(let i = 0; i < indexes.length; i += 1) {
                let k = indexes[i];
                
                guessWord[k] = randomWord[k];
                $('#guess-the-word').html(guessWord);
                $(target).css('visibility', 'hidden');

                if(guessWord.indexOf('_') < 0) {

                    $.ajax({
                        url: "/level/getLevel",
                        type: "GET",
                        data: {
                             status: 'success'
                            },
                            success: function(data) {
                               // console.log(data);
            
                            },
                            error: function(error) {
                                //console.log(error);    
                        }
                    });
                    win(startLevelGame);
                };
            
            }
            return;
       } else 
    $(target).css('visibility', 'hidden');
    if(wrong === 6) {
        $('#head').attr('class', 'head');
        $('#head').attr('visibility', 'visible');
        let head = document.querySelector('.head');
        head = head.getTotalLength();
        wrong -= 1;
        return;
    } else
    
    if(wrong === 5) {
        $('#body').attr('class', 'body');
        $('#body').attr('visibility', 'visible');
        let body = document.querySelector('.body');
        body = body.getTotalLength();
        wrong -= 1;
        return;
    } else

    if(wrong === 4) {
        $('#leftHand').attr('class', 'leftHand');
        $('#leftHand').attr('visibility', 'visible');
        let leftHand = document.querySelector('.leftHand');
        leftHand = leftHand.getTotalLength();
        wrong -= 1;
        return;
    } else

    if(wrong === 3) {
        $('#rightHand').attr('class', 'rightHand');
        $('#rightHand').attr('visibility', 'visible');
        let rightHand = document.querySelector('.rightHand');
        rightHand = rightHand.getTotalLength();
        wrong -= 1;
        return;
    } else

   if(wrong === 2) {
        $('#leftLeg').attr('class', 'leftLeg');
        $('#leftLeg').attr('leftLeg', 'leftLeg');
        let leftLeg = document.querySelector('.leftLeg');
        leftLeg = leftLeg.getTotalLength();
        wrong -= 1;
        return;
    } else

   if(wrong === 1) {
        $('#rightLeg').attr('class', 'rightLeg');
        $('#rightLeg').attr('visibility', 'visible');
        let rightLeg = document.querySelector('.rightLeg');
        rightLeg = rightLeg.getTotalLength();
        wrong -= 1;
        window.setTimeout(function(){
        $('#head').attr('cx', '110').delay(1000);
        $('#head').attr('cy', '90').delay(1000);
        $('#leftHand').attr('x2', '140').delay(1000);
        $('#rightHand').attr('x2', '160').delay(1000);
        $('#leftLeg').attr('x2', '140').delay(1000);
        $('#rightLeg').attr('x2', '160').delay(1000);
        $('#guess-the-word').html(randomWord);
        playAgain();
        }, 1000);
        return;
    }
}) 
};
});
