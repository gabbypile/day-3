// var arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // var store = 0;
// for ( var x of arr){
// 	store= x + store
// 	console.log(x);
// }

// for( var i=1 i < arr.lenght; i=i+1){
// 	console.log( "element" +1 + "is" arr[ i]);
// }

function upTo(low,high){
	var answer=[];
	for (var i=low; i<= high; i= i+1){
		answer.push(i);
	}
	return answer;
}

console.log( upTo(10,50));
	