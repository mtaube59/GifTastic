var topics = ["Naruto", "Sasuke", "Sakura", "Kakashi","Jiraya","Gaara"];

function renderButtons () {


$("#buttons-view").empty();

for (var i = 0; i < topics.length; i++) {

    var button = $("<button>");
    button.addclass(topic);
    button.text(topics[i]);
    $("#button-view").append(button);
}


}