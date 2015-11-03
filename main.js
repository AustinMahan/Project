$(document).ready(function(){

$('.computer').hide()


var computer = Math.random();

while(computer < .33){
  $(".computer").append("<img src='https://www.bluetrack.com/uploads/items_images/granite-rock-stress-balls4_thumb.jpg?r=1'>")
  var computer = 'Rock';
  break;
  }
while(.33 < computer && computer < .66){
  $(".computer").append("<img src='https://shop.aph.org/wcsstore/APHConsumerDirect/images/catalog/products_large/1-04851-00_BL_Notebook_Paper_Punch_G.jpg'>")
  var computer = 'Paper';
  break;
  }
while(computer > .66 && computer < 1){
  $(".computer").append("<img src='https://librarylostfoundblog.files.wordpress.com/2013/06/scissors.jpg'>")
  var computer = 'Scissors';
  break;
  }
console.log(computer);


// var humanRock = $(".picture").click()
var human = "";

// if($('div img:first-child').click() == true){
//   var human = 'Rock'
//   console.log(human);
// } else if($('div img:nth-child(2)').click() == true){
//   var human = 'Paper'
// } else if($('div img:nth-child(3)').click() == true){
//   var human = 'Scissors'
//   alert("you have chosen" + human);
// }




$('.picture1').click(function(){
  console.log('rock');
  human = 'Rock'
  $('.computer').show()
  compare(human, computer)

})

$('.picture2').click(function(){
  human = 'Paper'
  console.log('paper');
  $('.computer').show()
  compare(human, computer)
})

$('.picture3').click(function(){
  console.log('scissors');
  human = 'Scissors'
  $('.computer').show()
  compare(human, computer)
})

var compare = function(human, computer){
  if(computer === human){
  alert("It's a tie")
} else if(computer == 'Rock' && human == 'Paper'){
  alert('You win this round')
}else if(computer == 'Scissors' && human == 'Paper'){
  alert('Computer won this time')
}else if(computer == 'Rock' && human == 'Scissors'){
  alert('Compuer won this time')
}else if(computer == 'Scissors' && human == 'Rock'){
  alert('You win this round')
}else if(computer == 'Paper' && human == 'Rock'){
  alert('Computer won this time')
}else if(computer == 'Paper' && human == 'Scissors'){
  alert('You win this round')
} else if(human === ""){
  alert('break')
}
}


















});
