// Add your code here
 function submitData(username, email) {
      return fetch('http://localhost:3000/cats', {
      })
      .then(function(response) {
        if (!response.ok) {
     ('Network response was not ok');
        }
        return response.json();
      })
      .catch(function(error) {
        document.body.innerHTML = 'An error occurred: ' + error.message;
        console.error(error);
      });
    }
