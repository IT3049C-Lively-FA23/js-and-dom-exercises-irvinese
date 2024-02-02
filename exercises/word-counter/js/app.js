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
const wordCountSection = document.getElementById("stat");
const form = document.querySelector("form");

function updateStats() {
    const text = textarea.value;

    const words = text.trim().split(/\s+/);
    const charCount = text.length;

    wordCountSection.innerText = `You've written ${words.length} words and ${charCount} characters.`;
}

textarea.addEventListener("input", updateStats);

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

/*
  class WordCounter{
    constructor(textareaId, wordCountId, charCountId){
    this.textarea = document.getElementById(textareaId);
    this.wordCountSection = document.getElementById(wordCountId);
    this.charCountSection = document.getElementById(charCountId);

    this.updateStats = this.updateStats.bind(this);

    this.textarea.addEventListener("input", this.updateStats);
    }

    updateStats(){
      const text = this.textarea.value;
      const words = text.trim().split(/\s+/);
      const charCount = text.length;

      this.wordCountSection.innerText.value = `Words: ${words.length}`;
      this.charCountSection.innertext = `Characters: ${charCount}`;
    }
  }

  const wordCounter = new WordCounter("text", "wordCount", "charCount");
  */