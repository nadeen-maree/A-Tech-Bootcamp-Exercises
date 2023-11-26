//Loops

// Exercise 4:

  const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  for (let post in posts){
    if (posts[post].id == 2){
        for (let comment in posts[post].comments){
            if(posts[post].comments[comment].id == 3)
            posts[post].comments.splice(comment, 1)
        }
    }
  }
  console.log(posts)
 