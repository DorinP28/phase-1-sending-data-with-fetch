// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(response => response.json())
    .then(function(data){
        const domElement = document.createElement('div')
        document.querySelector('body').appendChild(domElement)
        domElement.innerHTML = data.id
    })
    .catch(error => {
        const errorMessage = error.message;
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${errorMessage}`;
        document.body.appendChild(errorElement);
      });
}
