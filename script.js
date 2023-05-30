import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCEKc6LG4IDBZFkevrTCo0zcbswPhsDUE",
    authDomain: "authentication-demo-b1726.firebaseapp.com",
    databaseURL: "https://authentication-demo-b1726-default-rtdb.firebaseio.com",
    projectId: "authentication-demo-b1726",
    storageBucket: "authentication-demo-b1726.appspot.com",
    messagingSenderId: "251698135091",
    appId: "1:251698135091:web:d7997c9ec4284f048ce346"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(`${email} ${password}`);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Registration successfully!!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(error);
        });
});

document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location.replace("./upload.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        console.log('An error happened.');
    });
});
