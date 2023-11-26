//Loops

// Exercise 3:
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  const ID = 2

  for (post in posts){
    if (posts[post].id === ID){
        posts.splice(post, 1)
    }
  }
  console.log(posts)
  