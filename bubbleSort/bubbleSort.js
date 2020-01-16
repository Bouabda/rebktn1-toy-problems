/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


<<<<<<< HEAD
//Time Complixty for bubble sort is O(N2) in the Worst case 
// but with Optmiztion the inner loop thet swapes the elemnts can be shortend by one iteration every time 
// and also IF the array is Already Sorted it well exit troghe th first Iteration so The Best Case Scinaro is O(N) 

var bubbleSort = function(array) {
	let swapped;
	let length = array.length;
 for (var i = 0; i < array.length; i++) { 
 	swapped = false;
  for (var j = 1; j < length; j++){
  	if(array[j] < array[j-1]){
  		var temp = array[j-1];
  		array[j-1] = array[j];
  		array[j] = temp;
  		swapped = true;
  	}
   }
   if(!swapped){
  	 return array;
  }
  length--; 
  }
  return array;
};

//SOLVED
=======
var bubbleSort = function(array) {
  // Your code here.
};
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
