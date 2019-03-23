$(document).ready(function () {


    var topics = ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Gaara", "Shikamaru Nara", "Hinata Hyuga", "Orochimaru"];



    function renderButtons() {


        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

            var button = $("<button>");
            button.addclass(topic);
            button.text(topics[i]);
            button.attr("data-naruto", topics[i]);
            $("#buttons-view").append(button);
        }
    }

    $("#buttons-view").on("click", function () {
        var name = $(this).attr("data-naruto");
        var myQuery = "https://api.giphy.com/v1/gifs/search?q=" +
            name + "&api_key=CTfBXVmDVk9OqaXdHblJlwpVylFwlFll&limit=10&rating=pg";


        $.ajax({
            url: myQuery,
            method: "GET"
        })
            .then(function (response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++)

                    var x = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var narutoImage = $("<img>");
                narutoImage.attr("src", results[i].images.fixed_height.url);
                x.append(p);
                x.append(narutoImage);
                $("#gifs-here").prepend(x);



            })
    })

    renderButtons()

})