
const ID = "https://www.youtube.com/watch?v="

const SongsManager = function(){
    const _songs = {}
    
    const addSong = function(songName, songUrl){
        let urlId = songUrl.replace(ID, "")
        _songs[songName] = urlId
    }

    const getSong = function(songName){
        if(songName in _songs){
            return ID + _songs[songName]
        }else{
            return console.log(`${songName} doesn't found!`)
        }
    }

    return{
        addSong: addSong,
        getSong: getSong
    }
}

const song = SongsManager()
song.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
song.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
console.log(song.getSong("sax"))
console.log(song.getSong("how long"))
console.log(song.getSong("LaLa"))

