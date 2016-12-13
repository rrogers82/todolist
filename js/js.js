$(document).ready(function(){

var theList = $('ul');

  // check off todo's with clicking
  theList.on('click',"li", function(){
    $(this).toggleClass('selected')
  })
  // clicking x span removes the todo item
  theList.on('click',"span", function(e){
    var _this = $(this).parent('li'); // create variable so we only grab from the DOM once.
    _this.fadeOut(1000, function(){
      _this.remove();
    });
    e.stopPropagation() // stops the bubbling effect of parent elements being triggered
  })

  $('input[type="text"]').keypress(function(event){
    if(event.which === 13){ // when the return key is pressed
      var theVal = $(this).val();
      $(this).val('')
      $('ul').append('<li><span>X</span> ' + theVal + '</li>')
    }
  })



})
