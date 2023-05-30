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
const user = auth.currentUser;

window.onload = function () {
    if (sessionStorage.getItem("email") == null || sessionStorage.getItem("email") == "") {
        window.location.href = "signin.html";
        sessionStorage.clear();
    }
    else{
        if(sessionStorage.getItem("count") == null){
            sessionStorage.setItem("count", 0);
            let email = sessionStorage.getItem("email");
            let password = sessionStorage.getItem("pwd");
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    sessionStorage.removeItem("pwd");
                    let user = userCredential.user.uid;
                    console.log(`${user} ${sessionStorage.getItem("uid")}`);
                    if (user == sessionStorage.getItem("uid")) {
                        window.location.replace("./dashboard.html");
                    }else{
                        window.location.href = "signin.html";
                        sessionStorage.clear();
                    }
                })
                .catch(() => {
                    window.location.href = "signin.html";
                    sessionStorage.clear();
                });
        }else{
            sessionStorage.setItem("count", parseInt(sessionStorage.getItem("count")) + 1);          
        }
        let username = "";
        let email = sessionStorage.getItem("email");
        for(let i = 0;i<email.length;i++){
            if(email[i] == '@'){        
                break;          
            }else{
                username += email[i];
            }
        }
        document.getElementById("user").innerText = `Welcome ${username}`;

    }
}
