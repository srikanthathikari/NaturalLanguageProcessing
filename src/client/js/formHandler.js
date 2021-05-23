

const handleSubmit = document.getElementById('submit').addEventListener("click", function (event){
    event.preventDefault();
    let formText = document.getElementById('url').value;
    fetch('http://localhost:8080/test',{
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({url: formText})
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
    })
})


export {handleSubmit}


