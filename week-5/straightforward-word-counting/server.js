const port = 3000
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const wordCounter = 
        {
            word: 7,
            nadeen: 4,
            hello: 10,
            world: 2,
            welcome: 5,
            goodbye: 14,
            goodmorning: 6,
            goodnight: 20
        }

// Exercise 1:
app.get('/sanity', function (req, res) {
    res.send('Server is up and running')
})

// Exercise 2:
app.get('/sanity/:word', function (req, res) {
    let word = req.params.word
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '')
    if(wordCounter[sanitizedWord]){
        res.send({count: wordCounter[sanitizedWord]})
    }
    res.send({count: 0})
})

// Exercise 3:
app.post('/wordCount', function (req, res) {
    const {word} = req.body
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '')
    if(!wordCounter[sanitizedWord]){
        wordCounter[sanitizedWord] = 1
    }else{
        wordCounter[sanitizedWord]++
    }
    res.send({text: "Added " + sanitizedWord, currentCount: wordCounter[sanitizedWord]})
})

// Exercise 4:
app.post('/sentenceCount/:sentence', (req, res) => {
    const { sentence } = req.params;
    const words = sentence.split(' ')
  
    let numNewWords = 0
    let numOldWords = 0
  
    words.forEach(word => {
      const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '')
      if (!wordCounter[sanitizedWord]) {
        wordCounter[sanitizedWord] = 1
        numNewWords++
      } else {
        wordCounter[sanitizedWord]++
        numOldWords++
      }
    })
  
    res.send({
      text: `Added ${numNewWords} words, ${numOldWords} already existed`,
      currentCount: -1 
    })
})
  
// Exercise 5:
app.delete('/word/:word', (req, res) => {
    const { word } = req.params
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '')
    if (!wordCounter[sanitizedWord]) {
        return res.status(404).send({error: `Word '${sanitizedWord}' not found in wordCounter`})
    }

    delete wordCounter[sanitizedWord]
    res.status(200).send({message: `Word '${sanitizedWord}' deleted successfully`})
})

// Extension 1:
/* 
    Added sanitizedWord variable and replaces word to it
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '') 
*/

// Extension 2:
app.get('/mostPopularWord', (req, res) => {
    let mostPopularWord = ''
    let maxCount = 0

    for (let word in wordCounter) {
        if (wordCounter[word] > maxCount) {
        mostPopularWord = word
        maxCount = wordCounter[word]
        }
    }

    res.send({ text: mostPopularWord, count: maxCount })
})
  
// Extension 3:
app.get('/top5Words', (req, res) => {
    const words = []
    for (const word in wordCounter) {
        words.push({ word, count: wordCounter[word] })
    }
  
    words.sort((a, b) => b.count - a.count)
    const top5Words = words.slice(0, 5).map(({ word, count }) => ({ [word]: count }))
  
    res.send({ ranking: top5Words })
})
  
// Extension 4:
app.get('/totalCount', (req, res) => {
    let totalCount = 0

    for (let word in wordCounter) {
        totalCount += wordCounter[word]
    }

    res.send({ text: "Total count", count: totalCount })
})
  
  
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})