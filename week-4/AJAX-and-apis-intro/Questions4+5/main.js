
const MY_API_KEY = 'V8wIx5oe7fXx6NSWUmkyOuyC7LXYVnA6';
const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?'
const REQUEST_EXTENSION = 'q='
const API_KEY_EXTENSION = '&api_key='


const searchGIF = function(){
    const searchTerm = $("#request-input").val();
    $.ajax({
        method: "GET",
        url: GIPHY_URL+REQUEST_EXTENSION+`${searchTerm}`+API_KEY_EXTENSION+`${MY_API_KEY}`,
        success: function(data) {
            const firstGifEmbedUrl = data.data[0].embed_url;
            $('#giphy-iframe').attr('src', firstGifEmbedUrl);
        },
        error: function(xhr, text, error) {
            console.error('Error:', error);
        }
        });
}
