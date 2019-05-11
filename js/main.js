// //const result = document.querySelector('#result > h1');

// function calc() {
//     let n1 = parseInt(document.getElementById('box'));
//     let n2 = parseInt(document.getElementById('result'));
//     let add = document.getElementById('plus');
//     let sub = document.getElementById('minus');

//     if(add === '+') {
//         return document.getElementById('result') = n1 + n2;

//     }
//     if(sub === '-') { 
//        return  document.getElementById('result') = n1 - n2;
// }
// }






// let = result;
// /*----- event listeners -----*/
// document.getElementById('plus').addEventListener('click', getResult);
// document.getElementById('minus').addEventListener('click', getResult);

// /*----- functions -----*/
// // init();

// function getResult() {
//     let n1 = parseInt(document.getElementById('box'));
//     let n2 = parseInt(document.getElementById('result'));
//     let add = document.getElementById('plus');
//     let sub = document.getElementById('minus');

//     if(add === '+') {
//         document.getElementById('result') = n1 + n2;
//     }
//     if(sub === '-') {
//         document.getElementById('result') = n2 - n1;
//     }
//     //result += ;
// } 




/*----- event listeners -----*/
document.getElementById('plus').addEventListener('click', addition);
document.getElementById('minus').addEventListener('click', subtraction);


function addition() {
    var n1 = parseInt(document.getElementById('box').value);
    var n2 = parseInt(document.getElementById('result').innerHTML);
   
    var math = result.innerHTML = n1 + n2;
}

function subtraction() {
    var n1 = parseInt(document.getElementById('box').value);
    var n2 = parseInt(document.getElementById('result').innerHTML);

    var math = result.innerHTML = n2 - n1;
}



