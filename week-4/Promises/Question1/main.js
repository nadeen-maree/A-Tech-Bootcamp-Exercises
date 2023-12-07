const RANDOM_WORD_API = 'https://random-word-api.herokuapp.com/word'
const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

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
  
getRandomWord()
  .then(randomWord => {
    console.log('Random Word:', randomWord)
    return searchBookByWord(randomWord)
  })
  .then(bookData => {
    console.log('Book Data:', bookData)
  })
  .catch(error => {
    console.error('Error:', error)
  })

  