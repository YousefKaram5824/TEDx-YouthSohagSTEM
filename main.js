var countDate = new Date('Aug 8, 2022 23:59:59').getTime();

let counter = setInterval(() => {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second *60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor(gap % (day) / (hour));
    var m = Math.floor(gap %(hour) / (minute));
    var s = Math.floor(gap % (minute) / (second));

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;

    if (gap < 0){
        clearInterval(counter);
    }
}, 1000);


function toggle() {
    var newsletter = document.querySelector(".newsletter");
    newsletter.classList.toggle('active');
}



const firebaseConfig = {
    apiKey: "AIzaSyCfqncNAa68xNubyCOiFaZipowqra_AzwQ",
    authDomain: "contactform-8396e.firebaseapp.com",
    databaseURL: "https://contactform-8396e-default-rtdb.firebaseio.com",
    projectId: "contactform-8396e",
    storageBucket: "contactform-8396e.appspot.com",
    messagingSenderId: "180739551563",
    appId: "1:180739551563:web:497d5a9671c8aa727ff8ce"
};

firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    var email = getElemntVal("email");
    saveMessages(email);
}

const saveMessages = (email) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        email: email,
    });
};

const getElemntVal = (id) => {
    return document.getElementById(id).value;
};