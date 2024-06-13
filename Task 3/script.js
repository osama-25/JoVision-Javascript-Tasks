function CreateArray(){
    let list = [];
    let sum = 0;

    for(i = 0; i <= 100; i++){
        list[i] = i;
        sum += i % 2 == 0? i:0;
    }
    document.writeln("sum = " + sum);
}