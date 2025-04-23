document.getElementById("server-send").addEventListener("click", getHelloWorldFromServer);

function getHelloWorldFromServer() {
    const serverRespDiv = document.getElementsByClassName("server-resp");
    const xhr = new XMLHttpRequest()

    // you need to put the server URL, plus the route
    xhr.open("GET", "http://127.0.0.1:8000/api/hello")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = () => {
        serverRespDiv[0].innerText = xhr.responseText;
    };

    xhr.send()
}