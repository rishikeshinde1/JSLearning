function fiboSeries(fabterms){
    let first = 0;
    let second = 1;
    let next;
    let fibSeries = [];
    for (let index = 0; index < fabterms; index++) {
        next = first + second;
        
        first = second;
        second = next;
        fibSeries.push(next);
    
        
    }
    console.log(fibSeries);

    
}
fiboSeries(7);
fiboSeries(20);