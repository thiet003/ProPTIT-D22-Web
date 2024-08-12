//I.If-else-else if

var date = 2;

if(date === 2){
    console.log('Hom nay la thu 2')
}
else if(date === 3){
    console.log('Hom nay la thu 3')
}
else if(date === 4){
    console.log('Hom nay la thu 4')
}
else{
    console.log('Hom nay la thu 10')
}

//II. Switch

    console.log('Switch:')
    switch(date){
        case 2:
            console.log('Hom nay la thu 2')
            break
        case 3:
            console.log('Hom nay la thu 3')
            break
        case 4:
            console.log('Hom nay la thu 4')
            break
        default:
            console.log('KOBT')
    }

//III. Toan tu 3 ngoi
var course = {
    name: 'JavaScript',
    coin: 250
}

if(course.coin > 0){
    console.log(`${course.coin} Coins`)
}else{
    console.log('Free')
}

var res = course.coin > 0 ? `${course.coin} Coins` : 'Free'
console.log(res);
