

$('#items .item[data-instock="true"]').click(function(){
    $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)
})


