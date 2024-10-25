let people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 }
];

let mark = new Array(100);
var peo = []
var id = -1
for(var i = 1; i <= 100; i++){
    var check = 0;
    for(let j in people){
        if(people[j].age === i){
            if(check === 0){
                check = 1;
                id++
                peo.push(new Array())
            }
            peo[id].push(people[j])

        }
    }
}
for(var i in peo){
    console.log(peo[i][0].age)
    console.log(peo[i])
}
//console.log(peo)

   


