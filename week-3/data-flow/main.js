
const posts = [
    {
        name: "Bob",
        text: "Hello!"
    },
    {
        name: "Nadeen",
        text: "GoodBye!"
    },{
        name: "Ted",
        text: "Happy Birthday!"
    },
    {
        name: "Poh",
        text: "I Like Honey!"
    }
]

const render = function () {
    $("#timeline").empty()

    for (let post of posts) {
        let postBox = $('<div></div>').text(`${post.name}: ${post.text}`)

        postBox.on("click", function(){
            posts.splice(posts.indexOf(post), 1)
            render()
        })

        $("#timeline").append(postBox)
    }
}
render()

$("#btn").on("click", function () {
    posts.push({
        name: $("#name-input").val(),
        text: $("#text-input").val()
    })
    render()
})




