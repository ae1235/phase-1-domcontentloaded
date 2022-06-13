document.addEventListener("DOMContentLoaded", function() {
    updateParagraphText();
  
  });
  
  function updateParagraphText() {
    
    const textToUpdate = document.querySelector("#text").textContent = "This is really cool!"
  
    return textToUpdate;
  }