var xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:1337/games", false);
xhr.send();

function alpha(a, b)
{
  return (a.name > b.name) ? 1 :-1;
}

list = JSON.parse(xhr.responseText);
list = list.sort(alpha);
var i = 0;
while (i < list.length) {
  document.getElementById("gamelist").innerHTML += list[i].name + "</br>";
  i++;
}
