// code break

// for (var i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i > 10) {
//         break;
//     }
// } 

var roastGiven = 0;
while (roastGiven < 10) {
    console.log('Roast den, na hoile !!');
    roastGiven++;
    if (roastGiven > 4) {
        break;
    }
}
