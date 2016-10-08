function changeWord() {
  // Grabs the value of the input with an ID of 'firstName' and stores it as a variable called 'originalWord'
  var originalWord = document.getElementById('firstName').value;
  // Takes the originalWord and adds a contact encouragment message -- then stores it inside of a variable called newWord
  var newWord = 'Of course I want to hear from you, ' + originalWord + '!';
  // Targets the element with an ID of 'contactEncouragement' and sets the innerText(basically, the content of that element) as our newWord variable(which is a string)
  document.getElementById('contactEncouragement').innerText = newWord;
}
//javascript string concatenation
