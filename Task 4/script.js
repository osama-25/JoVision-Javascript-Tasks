function CreateArray(){
    let list = [];
    let sum = 0;

    for(i = 0; i <= 100; i++){
        list[i] = i;
        sum += i;
    }
    document.writeln("sum = " + sum);
}