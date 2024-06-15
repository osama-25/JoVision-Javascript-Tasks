function createobject(){
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);

    let person = new Object();
    person.name = name;
    person.age = age;
    person.timestamp = new Date().toLocaleString();

    window.alert("Your name is: " + person.name + "\nYour age is: " + person.age +  "\nTimestamp: " + person.timestamp);
}