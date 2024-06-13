function div3(){
    let list = [];

    for(i = 0; i <= 100; i++){
        list[i] = i;
        if(i % 3 == 0){
            list.pop();
        }
    }
    console.log(list.toString());
}

function add150(){
    let list = [];

    for(i = 0; i < 100; i++){
        list[i] = i;
    }
    for(i = 100; i <= 150; i++){
        list[i] = i;
    }

    console.log(list.toString());
}

function add3(){
    let list = [];

    for(i = 0; i <= 100; i++){
        list[i] = i + 3;
    }

    console.log(list.toString());
}

function print20(){
    let list = [];

    for(i = 0; i <= 100; i++){
        list[i] = i;
    }
    for(i = 20; i <= 40 ;i++){
        console.log(list[i] + " ");
    }
}

function shuffle(){
    let list = [];

    for(i = 0; i <= 100; i++){
        list[i] = i;
    }

    shuffleArray(list);
    console.log(list.toString());

    list.sort(function(a, b) {
        return a - b;
      });
    list.reverse();
    console.log(list.toString());
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
