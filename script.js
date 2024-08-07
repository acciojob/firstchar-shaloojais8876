function firstChar(text) {
  // your code here
	 // Trim the input string to remove leading and trailing spaces
  text = text.trim();

  // Check if the trimmed string is empty
  if (text === '') {
    return '';
  }

  // Iterate through each character of the trimmed string
  for (let i = 0; i < text.length; i++) {
    // Check if the current character is not a space
    if (text[i] !== ' ') {
      // Return the first non-space character
      return text[i];
    }
  }

  // If the string only contains spaces, return an empty string
  return '';
}

// Example cases
console.log(firstChar(' Rosa Parks '));     // Output: 'R'
console.log(firstChar('  Hello World '));   // Output: 'H'
console.log(firstChar('   '));              // Output: ''
console.log(firstChar(''));                 // Outpu


// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
