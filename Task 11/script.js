function getip() {
    let button = document.getElementById("button");
    let fetchRes = fetch("https://api.ipify.orgx?format=json")
    .then(response => response.json())
    .then(data => button.innerHTML = data.ip)
    .catch(error => {
        window.alert(error);
    });
}