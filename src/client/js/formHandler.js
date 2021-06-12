
// let fetch = require('node-fetch');

async function handleSubmit(event){
    
    console.log('I am sending  a req');
    event.preventDefault();
    let formText = document.getElementById('url').value;
   await fetch('http://localhost:8080/test',  {formText})
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
    })

}
export {handleSubmit}
