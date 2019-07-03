    var queryURL = "https://api.discogs.com?api_key=GCsLSmSgsIIzroXNKCbsBdWNAsGiRgKScTDVGNqk"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    

});

