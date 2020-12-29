var array = [[0,0,0],
       [1,0,0],
       [1,0,1]];


for (let i = 0; i> array.length; i++){
    (array[0][i] === array[0][i+1]) ? console.log("won") : console.log("lost");
}