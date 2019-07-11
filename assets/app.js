var config = {
    apiKey: "AIzaSyATwSD8AZkiqB3og3ZR-FWpbZ_2zknjvfw",
    authDomain: "collection-list.firebaseapp.com",
    databaseURL: "https://collection-list.firebaseio.com/",
    storageBucket: "collection-list.appspot.com",
    messagingSenderId: "831848521683",
};

firebase.initializeApp(config);

var database = firebase.database();

var aTitle = $("#title-input").val();
var aArtist = $("#artist-input").val();

var queryURL = "https://api.discogs.com/database/search?release_title=" + aTitle + "&artist=" + aArtist + "&format=vinyl&per_page=1&page=1&key=CQwYyYowOAghyybYpMYL&secret=hlsXvJXvbpgfeoNJJHhOjEmSWzBgKvnY";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    $("#collection-btn").on("click", function (event) {
        event.preventDefault();

        var titleList = $("#title-input").val();
        var artistList = $("#artist-input").val();
        

        var newListing = {
            title: titleList,
            artist: artistList,
        };

        database.ref().push(newListing);

        console.log(newListing.title);
        console.log(newListing.artist);

        $("#title-input").val("");
        $("#artist-input").val("");

    });

    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());
        var titleList = childSnapshot.val().title;
        var artistList = childSnapshot.val().artist;
        

        var newRow = $("<tr>").append(
            $("<td>").text(titleList),
            $("<td>").text(artistList),
            );



        $("#collection-table > tbody").append(newRow);


    });

});
