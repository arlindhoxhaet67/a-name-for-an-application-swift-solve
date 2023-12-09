/* 
Filename: ComplexCode.js

This code demonstrates a complex text analysis algorithm that counts the occurrence of each word in a given text. It uses various data structures and advanced JavaScript techniques to provide a professional and creative solution.

*/

// Function to tokenize text into an array of words
function tokenizeText(text) {
  return text.toLowerCase().split(/[^\w']+/);
}

// Function to count the occurrence of each word in a given text
function countWords(text) {
  const words = tokenizeText(text);
  const wordCount = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Skip common words
    if (commonWords[word]) {
      continue;
    }

    // Initialize word count if not already present
    if (!wordCount[word]) {
      wordCount[word] = 0;
    }

    // Increment word count
    wordCount[word]++;
  }

  return wordCount;
}

// Sample text for analysis
const text = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. 

It has survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged. It was popularised in the 1960s 
with the release of Letraset sheets containing Lorem Ipsum passages, and 
more recently with desktop publishing software like Aldus PageMaker including 
versions of Lorem Ipsum.`;

// Common words to skip in counting
const commonWords = {
  is: true,
  it: true,
  and: true,
  of: true,
  in: true,
  to: true,
  been: true,
  the: true,
  with: true,
  like: true,
  including: true,
};

// Count the occurrence of each word in the text
const wordCount = countWords(text);

// Display the word count
for (let word in wordCount) {
  console.log(word, "-", wordCount[word]);
}