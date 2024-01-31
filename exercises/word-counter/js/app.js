// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

const textarea = document.getElementById("text");
const wordCountSection = document.getElementById("wordCount");
const charCountSection = document.getElementById("charCount");
  const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();
});

  textarea.addEventListener("input", updateStats);

  function updateStats(){
  
    const text = textarea.value;

    const words = text.trim().split(/\s+/);
    

    const charCount = text.length;

    wordCountSection.innerText = `Words: ${words.length}`;
  charCountSection.innerText = `Characters: ${charCount}`;
  }
 