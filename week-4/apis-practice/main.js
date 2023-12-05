const URL = 'https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people'
const petsURL = 'https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets'

const printPet = function(data){
     for(let d of data){
        if(d.owner == 'Rebecca Parker'){
            console.log(d.name)
            if(d.neutered){
                console.log(d.name + " is neutered")
            }
        } 
    }
}
const printData = function(data){
    for(let d of data){
        if(d.name.first == 'Rebecca' && d.name.last == 'Parker'){
            petsData()
        }
    }
    }
    

const peopleData = function(){
    $.ajax({
        method: "GET",
        url: URL,
        success: printData,
        error: function(xhr, text, error) {
            console.error('Error:', error);
        }
        });
}




const petsData = function(){
    $.ajax({
        method: "GET",
        url: petsURL,
        success: printPet,
        error: function(xhr, text, error) {
            console.error('Error:', error);
        }
        });
}

peopleData()