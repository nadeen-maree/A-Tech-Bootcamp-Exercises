$("#div").on("click", function(){
    $(this).css('background-color', '#f39c12')
})

const api = $.get('http://data.nba.net/10s/prod/v1/2016/players.json')
console.log(api)