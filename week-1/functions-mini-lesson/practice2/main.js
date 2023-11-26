// Practice 2:

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const countWords = function(sentence){
    const cleanSentence = cleanText(sentence)
    for(word of cleanSentence){
      addToCounter(word)
    }
  }
  
  const addToCounter = function(word){
    //If word exists in wordCounts, increase its value by 1
    //Otherwise, set its value to 1
    if(wordCounts[word]){
        wordCounts[word] += 1;
      } else {
        wordCounts[word] = 1;
      }
  }
  
  const cleanText = function(sentence){
    //Lowercase sentence
    //Call the removeSpecialChars function with sentence and return its value
    const lowerCaseSentence = sentence.toLowerCase();
  return removeSpecialChars(lowerCaseSentence).split(" ").filter(word => word !== '');
  }
  
  const removeSpecialChars = function(sentence){
    //For each special character, remove it from sentence using the .split().join() we talked about before
    //Remember that .split().join() returns a new value each time
    //Return the updated sentence
    let cleanedSentence = sentence;
    specialChars.forEach(char => {
    cleanedSentence = cleanedSentence.split(char).join('');
    });
  return cleanedSentence;
  }

//   countWords(story)
//   console.log(wordCounts)
countWords(story);

// Printing the output in the specified format
console.log("{");
Object.keys(wordCounts).forEach((word, index, array) => {
  if (index === array.length - 1) {
    console.log(`  ${word}: ${wordCounts[word]}`);
    console.log("}");
  } else {
    console.log(`  ${word}: ${wordCounts[word]},`);
  }
});
  


