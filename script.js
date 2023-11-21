function toggleDescription(toolNumber) {
  var descriptionRow = document.getElementById('description-' + toolNumber);
  descriptionRow.style.display = (descriptionRow.style.display === 'none' || descriptionRow.style.display === '') ? 'table-row' : 'none';
}

function checkPassword() {
      var enteredPassword = document.getElementById('password').value;
      var correctPassword = 'aa'; // Change this to your desired password

      if (enteredPassword === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
      } else {
        alert('Incorrect password. Please try again.');
      }
    }