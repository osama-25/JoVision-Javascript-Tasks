async function createobject(){
    let name = document.getElementById("name").value;
    let age;
    let fetchRes = await fetch("https://api.agify.io/?format=json&name="+name)
    .then(response => response.json())
    .then((data) => {age = data.age})
    .catch(error => {
        window.alert(error);
    });
    window.alert("Your name is: " + name + "\nYour age is: " + age);
}