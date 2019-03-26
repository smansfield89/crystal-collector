
// Game: 4 crystals, random result 1 - 12, upon win/loss new random number for the crystals
// 'win' pane shows random number at beginning of game
// Clicking crystals adds to 'number pane' (augment previous clicks' total)
// if you go over the win pane random number, loss 
// or matching score shown in win pane shows winning alert
//both outcomes must reset the game





//background

//global vars

var random_result;
var win = 0;
var lose = 0;
var prev = 0;
 
var reset = function() {


// remove prev elements
    $(".crystals").empty();

    var images = [
        
        'https://i.pinimg.com/originals/58/3d/8c/583d8c0fcc57e936b0a3257f2f3bf52d.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuIL_Y-2QSj186Yr1QOXX7kaxjcUpBk3wmTD2YNm3zO234rjfAg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddkwT30l2uCKvAm4GJObeSUOxai8rEkDAxnfP8LqB-KkrpEjM',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkagF-Y96NBk7MiReVOvV6gkwJYk0Na4dizgyvqZZpO_Yxa9S'];

//new elem to dom
    random_result = Math.floor(Math.random() * 69) + 30;

    //console.log(random_result);

    $("#result").html('Magical Number: ' + random_result);


    // gen 4 crystal slots
    for (var i = 0; i < 4; i++){
    //console.log("test");

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

 
 
    var crystal = $("<div>");
    
     crystal.attr({
         "class": 'crystal',
         "random_num": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });
        
     
    
     $(".crystals").append(crystal);
    
    }

    $("#prev").html("Magic Score: " + prev);
} 

//capture page load req..
reset();


//remember jquery event delegation..
$(document).on('click', ".crystal", function (){

    

    var num = parseInt($(this).attr('random_num'));
    prev += num;

    $("#prev").html("Magic Score: " + prev);

    console.log(prev);

//conditional logic for result

if(prev > random_result){
    lose++;
    
    $("#loss").html("You are not the Chosen One " + lose);
    
    prev = 0;

    reset();
}

else if(prev === random_result){
    win++;
    //console.log("win");

    $("#win").html("The power is within you Chosen One " + win);

    prev = 0;

    reset();
}


    
    

    //console.log($(this));
});

// // starshine background
// $(function() {
//     var body = $('#starshine'),
//         template = $('.template.shine'),
//         stars =  500,
//         sparkle = 20;
    
      
//     var size = 'small';
//     var createStar = function() {
//       template.clone().removeAttr('id').css({
//         top: (Math.random() * 100) + '%',
//         left: (Math.random() * 100) + '%',
//         webkitAnimationDelay: (Math.random() * sparkle) + 's',
//         mozAnimationDelay: (Math.random() * sparkle) + 's'
//       }).addClass(size).appendTo(footer);
//     };
   
//     for(var i = 0; i < stars; i++) {
//       if(i % 2 === 0) {
//         size = 'small';
//       } else if(i % 3 === 0) {
//         size = 'medium';
//       } else {
//         size = 'large';
//       }
      
//       createStar();
//     }
//   });



