function isPalindrome(word) {
  // Write your algorithm here
  const input = word.split('')
  const result = input.reverse()

  if (input == result){
    return true

  }
  else{
    return false
  }

}

/* 
  
  take the input store it into a variable 
  use the reverse function to reverse the word 
  store the result into another variable 
  use if statement to compare the two words 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
