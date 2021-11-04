
const n = 4 


function handleN(e) {
    let x = [];
    x[0] = 1;
    x[1] = 1
    let i = 0;
    let b = 0;
    while(i < e) {
        x.push(x[i] + x[i+1]) 
        i++
        //console.log(x, "array");
        //console.log(i, "index")
    }
    if(x[e] < 2 ) {
    console.log(`${x[e]} possible solution`) 
    }

    else { 
    console.log(`${x[e]} possible solutions`) 
    }
}