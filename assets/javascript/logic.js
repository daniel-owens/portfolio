const config = {
  apiKey: "AIzaSyC533cKqcxlpUpvwbt-LqhmzG1m1djg3Y8",
  authDomain: "portfolio-contact-database.firebaseapp.com",
  databaseURL: "https://portfolio-contact-database.firebaseio.com",
  projectId: "portfolio-contact-database",
  storageBucket: "portfolio-contact-database.appspot.com",
  messagingSenderId: "977595665274"
};

firebase.initializeApp(config);
const database = firebase.database();


// contact form jQuery
$(document).on("click", "#submit-button", function(){
    event.preventDefault();

    const firstName = $('#form_firstname').val().trim();
    const lastName = $('#form_lastname').val().trim();
    const email = $('#form_email').val().trim();
    const phone = $('#form_phone').val().trim();
    const message = $('#form_message').val().trim();

    database.ref().push({
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        message: message
    });

    $('#form_firstname').val("");
    $('#form_lastname').val("");
    $('#form_email').val("");
    $('#form_phone').val("");
    $('#form_message').val("");
    alert("Thanks for the message. 🌝");

});