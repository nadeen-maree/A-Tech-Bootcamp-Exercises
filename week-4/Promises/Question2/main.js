const RANDOM_WORD_API = 'https://random-word-api.herokuapp.com/word'
const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?'
const MY_API_KEY = 'V8wIx5oe7fXx6NSWUmkyOuyC7LXYVnA6'
const REQUEST_EXTENSION = 'q='
const API_KEY_EXTENSION = '&api_key='

function getRandomWord() {
  return new Promise((resolve, reject) => {
    fetch(RANDOM_WORD_API)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to fetch random word')
      })
      .then(data => {
        resolve(data[0])
      })
      .catch(error => {
        reject(error)
      })
  })
}
  
function searchBookByWord(word) {
  return new Promise((resolve, reject) => {
    const googleBooksAPI = GOOGLE_BOOKS_API+`${word}`

    fetch(googleBooksAPI)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to fetch book')
      })
      .then(data => {
        resolve(data.items[0].volumeInfo.title)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function searchGifByWord(word){
  return new Promise((resolve, reject) => {
    const giphyApi = GIPHY_URL+REQUEST_EXTENSION+`${word}`+API_KEY_EXTENSION+`${MY_API_KEY}`

    fetch(giphyApi)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to fetch gif')
      })
      .then(data => {
        resolve(data.data[0].embed_url)
      })
      .catch(error => {
        reject(error)
      })
  })
}

  
getRandomWord()
  .then(randomWord => {
    console.log('Random Word:', randomWord)
    let bookPromise = searchBookByWord(randomWord)
    let gifPromise = searchGifByWord(randomWord)
    return Promise.all([bookPromise, gifPromise])
  })
  .then((promiseResults) => {
    let [book, gif] = promiseResults
    $('body').append(book)
    $('#giphy-iframe').attr('src', gif)
  })
  .catch(error => {
    console.error('Error:', error)
  })

  