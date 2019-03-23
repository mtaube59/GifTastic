$(document).ready(function () {


    var topics = ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Gaara", "Shikamaru Nara", "Hinata Hyuga", "Orochimaru"];



    function renderButtons() {


        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

            var button = $("<button>");
            button.addClass("topic");
            button.text(topics[i]);
            button.attr("data-naruto", topics[i]);
            $("#buttons-view").append(button);
        }
    }

    $("#buttons-view").on("click", ".topic", function () {
        var name = $(this).attr("data-naruto");
        console.log(name);
        var myQuery = "https://api.giphy.com/v1/gifs/search?q=" +
            name + "&api_key=CTfBXVmDVk9OqaXdHblJlwpVylFwlFll&limit=10&rating=pg";


        $.ajax({
            url: myQuery,
            method: "GET"
        })
            .then(function (response) {

                var results = response.data;
                console.log(results);

                for (var i = 0; i < results.length; i++) {

                    var x = $("<div>");
                    x.addClass("gifs")
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var narutoImage = $("<img>");
                    narutoImage.addClass("gify")
                    narutoImage.attr("data-state", "still")
                    narutoImage.attr("data-still", results[i].images.fixed_height_still.url)
                    narutoImage.attr("data-animate", results[i].images.fixed_height.url)
                    narutoImage.attr("src", results[i].images.fixed_height_still.url);
                    x.append(p);
                    x.append(narutoImage);
                    $("#gifs-here").prepend(x);


                }
            })

    })

    $("#add-name").on("click", function (event) {
        event.preventDefault();
        var name = $("#name-input").val().trim();
        topics.push(name);
        $("#name-input").val("")
        renderButtons()

    })

    $("#gifs-here").on("click",".gify", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    renderButtons()

})