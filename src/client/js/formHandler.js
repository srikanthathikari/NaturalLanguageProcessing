


function handleSubmit(event) {

    event.preventDefault();
    let formText = document.getElementById('url').value;
    const data = {
        formText
    }
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8080/test',  {formText})
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    }
    else {
        alert('Please enter a valid URL')
    };
}
export { handleSubmit }
