const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q="

const useData = function(data){
  data.items.forEach(function(book){
    const bookInfo = book.volumeInfo;
    const title = bookInfo.title;
    const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author';
    const isbn = bookInfo.industryIdentifiers ? bookInfo.industryIdentifiers[0].identifier : 'ISBN not available';

    console.log("Title: " + title);
    console.log("Authors: " + authors);
    console.log("ISBN: " + isbn);
    console.log("------------------------------");
  });
}

let relevantUrl = ""
const fetch = function (queryType, queryValue) {
  if(queryType === "isbn"){
    relevantUrl = GOOGLE_BOOKS_URL+'isbn:'+ queryValue
  }else if (queryType === "title"){
    relevantUrl = GOOGLE_BOOKS_URL+'intitle:'+ queryValue
  } else {
    console.log('Invalid queryType');
    return;
  }
  $.ajax({
      method: "GET",
      url: relevantUrl,
      success: useData
      ,
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

fetch("isbn",9782806269171)
fetch("title","How to Win Friends and Influence People")