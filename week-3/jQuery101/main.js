// const header = $("h1")

// console.log(header)
// //console.log(jQuery)
// console.log($)

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//     }
// }

// console.log(myQuery("#header"))

// const sayHi = function(){
//     console.log("Hi!")
// }

// const $ = sayHi

//$() //prints "Hi!"


// console.log($("h4"))
// $("h4").css("color", "red")

// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:first-child").css("color", "green")
// $("li:last-child").css("color", "pink")
// $("#brown-div").css("color", "brown")

// $("#b1").addClass("box")
// $("#b2").addClass("box")

// console.log($("#b1"))
// console.log($("#b2"))

//$('#my-input').val("Terabyte")

// const barcode = $("div").data().barcode  
// console.log(barcode)
// const expirationDate = $("div").data().expirationdate  
// console.log(expirationDate)

// $("#a1").hover(function () {
//     $("#a1").css("background-color", "blue")
// })

// $("button").click(function () {
//     alert($('#my-input').val())
// })

// $("#b1").hover(function () {
//     console.log($(this))
// })


// $(".box").hover(function () {
//     $(this).css("background-color", "blue")
// })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// $(".feedme").on("click", function(){
//     let divCopy = $(`<div class=feedme>${$(this).text()}</div>`)//use template literals and $(this)
    
//     $("body").append(divCopy)
// })

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for(let name of names){
//     $("body").append(`<div class = human>${name.first} - ${name.last} </div>`)
// }

// $("p").hover(function () {
//     $("p").remove()
// })


// $("button").on("click", function(){
//     $("#blogs").append("<div class = blog> I'm a post </div>")
// })

// $("button").on("click", function(){
//     $(".blog").text("blargh")
// })


// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(this).text("uncool blog") 
//   })

//$('#btn').click(alert('hi'))

// let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

// for(let post of posts){
//     $("#posts").append(`
//         <div>${post.name}</div><input type="text" placeholder="say something nice" />
//     `)
// }

// posts.splice(0, 1)

$('.box').css('background-color', 'red')