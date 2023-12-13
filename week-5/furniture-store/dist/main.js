let money = 500
let lastPrice = null

const updateMoneyDisplay = () => {
    $('#money-display').text(money)
}

updateMoneyDisplay()

const fetchFurnitureData = function(){
    let input = $("#furniture-input").val()

    $.get(`priceCheck/${input}`, function(furnitureData){
            $("#price-container").append(`<div>${furnitureData.price}</div>`)

    })
}

const purchase = function() {
    let input = $("#user-input").val()

    $.get(`priceCheck/${input}`, function(furnitureData) {
        if (money >= furnitureData.price) {
            $.get(`buy/${input}`, function(updatedStore){
                const purchasedItem = updatedStore.find(item => item.name === input)
                money -= furnitureData.price
                updateMoneyDisplay()
                if (purchasedItem) {
                    const message = `Congratulations, you’ve just bought ${purchasedItem.name} for ${purchasedItem.price}. There are ${purchasedItem.inventory} left now in the store.`
                    $("#purchase-container").append(`<div>${message}</div>`)
                } else {
                    $("#purchase-container").append(`<div>Item not found in the store.</div>`)
                }
            })
        } else {
            $("#purchase-container").append(`<div>Sorry, you don't have enough money. You should get a job!</div>`)
        }
    })
}

const checkChairPrice = () => {
    $.get('priceCheck/chair', function(furnitureData) {
        if (lastPrice === null) {
            lastPrice = furnitureData.price
        } else if (furnitureData.price < lastPrice) {
            lastPrice = furnitureData.price
            $.get('buy/chair', function() {
                console.log("bought chair for less")
            })
        } else {
            console.log("still waiting for a price drop...")
        }
    })
}

const priceCheckInterval = setInterval(checkChairPrice, 3000)

