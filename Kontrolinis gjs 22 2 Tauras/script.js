var submitButton = document.getElementById("button1");
var add = document.getElementById("write");

submitButton.addEventListener("click", addStuff);

function addStuff()
{
    todo = text1.value
        add.innerHTML += "<li>" + todo + "</li>";
}
