function buildQueryURL(){

    var queryURL = "https://api.discogs.com/releases/249504?api_key=GCsLSmSgsIIzroXNKCbsBdWNAsGiRgKScTDVGNqk"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    

});
}
