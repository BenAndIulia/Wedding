
function sendMail () {
    var params = { 
        firstName: document.getElementById('firstName').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        messageForm: document.getElementById('messageForm').value,
        
    }
    emailjs.send("service_1p16q6l", "template_20kd1il", params)
        .then( (res) => {
            document.getElementById('firstName').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('messageForm').value = '';
            alert("Success " + res.status)
        });
}