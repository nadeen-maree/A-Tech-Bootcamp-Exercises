//Loops

  // Extension:

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  let letters =  Object.keys(dictionary)
  for (let letter in letters){

        let alphabet = letters[letter]
        if (alphabet == 'A'){
            console.log("Words that begin with A:")
            for (word in dictionary.A){
                words = dictionary.A[word]
                console.log(`${words}`)
            }
        }  else if (alphabet == 'B'){
            console.log("Words that begin with B:")
            for (word in dictionary.B){
                words = dictionary.B[word]
                console.log(`${words}`)
            }
        } else{
                console.log("Words that begin with C:")
                for (word in dictionary.C){
                    words = dictionary.C[word]
                    console.log(`${words}`)
                }
         }
     }
