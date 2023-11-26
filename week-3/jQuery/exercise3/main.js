
for (let i = 0; i < 2; i++) {
    $('<div>').addClass('box').appendTo('body');
}


$(".box").mouseenter(function () {
    $(this).css("background-color", "red")
})

$(".box").mouseleave(function () {
    $(this).css("background-color", "purple")
})
