// Practice 1:

people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]


  const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
  }

  const getAge = function(age){
    if(age < 21){
        age = "Underage"
    }else if (age >= 55){
        age = "55+"
    }
    return age
  }

  const countryCity = function(str1, str2){
    let str1Capitalized = capitalize(str1)
    let str2Capitalized = capitalize(str2)
    return `${str1Capitalized}, ${str2Capitalized}`
  }

  const getCatchphrase = function(str){
    return capitalize(str)
  }

  const getProfession = function(str){

    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
    
  }

  const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += `${getProfession(person.profession)}`//call function for profession
    summary += ` from ${countryCity(person.city, person.country)}.`//call function for country + city
    summary += ` ${capitalize(person.name)} loves to say "${getCatchphrase(person.catchphrase)}."`//call function for catchphrasereturn summary
    return summary
}

for (i in people_info){
    console.log(getSummary(people_info[i]))
}
