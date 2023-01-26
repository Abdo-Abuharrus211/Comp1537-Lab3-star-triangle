function drawTriangle(n) {
    // first, loop through the number of rows
    for(i = 0; i <= n; i++ ){
        row = "";
        for(j = 0; j < i; j++) {
            row = row.concat("", "*");
        }
        console.log(row);
    }
  }

//   function drawInverseTriangle(n) {
//     // first, loop through the number of rows
//     for(i = n; i <= 0; i--){
//         row = "";
//         for(j = i; j < 0; j--) {
//             row = row.concat("", "*");
//         }
//         console.log(row);
//     }
//   }

  drawTriangle(5);
  //drawInverseTriangle(5);