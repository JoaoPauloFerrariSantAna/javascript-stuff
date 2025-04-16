/* NOTE: this code is not suitable for prod.
 * it's a test */

// whereToUpdate is a array
function updateForClient(newData, whereToUpdate) {
    const indexes = Object.keys(newData);

    for(let i = 0; i < whereToUpdate.length; i++) {
        whereToUpdate[i].innerText =  newData[indexes[i]];
    }
}

function sendRequest(method, whatToSend, whereToUpdate) {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, whatToSend);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onload = () => { 
        const resp = JSON.parse(xhr.responseText);
        setInterval(updateForClient, 5 * 1000, resp, whereToUpdate)
    };

    xhr.send(null);
}

(function () {
    const userInfo = {
        name: "John",
        age: 18
    };

    const usernamePlace = document.getElementById("username");
    const agePlace = document.getElementById("age")

    const places = [ usernamePlace, agePlace ]

    updateForClient(userInfo, places)
    
    sendRequest("POST", `./request.php?name=${userInfo["name"]}&age=${userInfo["age"]}`, places);
})()