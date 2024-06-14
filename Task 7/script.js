function time(){
    let d = new Date();

    let p = document.getElementById("time");

    p.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

setInterval(time, 1000);