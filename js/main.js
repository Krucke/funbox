$(document).ready(function(){
  let leave = "Сказочное заморское яство";
  let underBlock;
  $('.card').on('click', function(){
    console.log(underBlock);
    if($(this).hasClass('card-disabled')){
      return;
    }
    else{
      if($(this).hasClass('card-selected')){
        $(this).removeClass('card-selected');
        $(this).find('.leave').removeClass('text-selected').text(leave);
        $(this).find('.card__under').text("").append(underBlock);
      }
      else {
        $(this).addClass('card-selected');
        let text = $(this).find('.span-change').data('sub');
        underBlock = $(this).find('.card__under').children().detach();
        $(this).find('.card__under').text(text);
      }
    }
  });
  $('.card').on('mouseleave', function(){
    if($(this).hasClass('card-selected')){
      $(this).find('.leave').addClass('text-selected').text('Котэ не одобряет?');
    }
  })
})
