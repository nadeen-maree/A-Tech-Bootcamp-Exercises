

$('#items .item[data-instock="true"]').click(function(){
    let itemName = $(this).text()

    let existingCartItem = $(`.cart-item:contains('${itemName}')`)

    if (existingCartItem.length > 0) {

        let itemCount = parseInt(existingCartItem.text().split('x')[1])
        existingCartItem.text(`${itemName} x${itemCount + 1}`)

    } else {
        let cartItem = `<div class="cart-item">${itemName} x1</div>`
        $("#cart").append(cartItem)
    }

    $('#cart').on('click', '.cart-item', function() {
         $(this).remove()
    })
})


