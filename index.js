console.clear();

 let prompt = document.querySelector('#prompt-form-container');
 let form = document.querySelector('#prompt-form');
 let message = document.querySelector('#prompt-message');
 
btn.onclick = function() {
   showPrompt('А ну-ка... расскажи', callback);
   showCover();
 };
 
function showCover() {
 let coverDiv = document.createElement('div');
 coverDiv.id = 'cover-div';
 document.body.appendChild(coverDiv);
 }
function hideCover() {
      document.body.removeChild(document.getElementById('cover-div'));
    }
 
 function callback (message) {
     alert(message);
   }
   
 function showPrompt(text, callback) {
   prompt.style.display = 'block';
   message.innerHTML = text;
   
   button.addEventListener('click', function () {
      callback(null);
      prompt.style.display = 'none';
      hideCover();
   })
   
   form.addEventListener('submit', function () {
      callback(input.value);
      prompt.style.display = 'none';
     hideCover();
  });
 }