// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.


const textarea = document.getElementById("text");
  const statsSection = document.getElementById("stat");
  const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();
});

  textarea.addEventListener("input", updateStats);

  function updateStats(){
  
    const text = textarea.value;

    const words = text.trim().split(/\s+/);
    

    const charCount = text.length;

    statsSection.textContent = `Words: ${words.length}, Characters: ${charCount}`;
  }
 