// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY4YOQfCypplqp7LgHNuUsdgjDOCDlJk8",
    authDomain: "restaurant-83d3d.firebaseapp.com",
    projectId: "restaurant-83d3d",
    storageBucket: "restaurant-83d3d.appspot.com",
    messagingSenderId: "539048339280",
    appId: "1:539048339280:web:e479977896715df2f8ee55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

// M MODAL
$(document).ready(function() {
    $('.modal').modal();
});

// CREATE USERS

const signUp = () => {
    // GETTING VALUES
    let userName = document.getElementById("username").value;
    let email = document.getElementById("useremail").value;
    let userPhone = document.getElementById("userphone").value;
    let userCountry = document.getElementById("usercountry").value;
    let userCity = document.getElementById("usercity").value;
    let password = document.getElementById("userpassword").value;
    let userType = document.getElementsByName("group2");
    for (let i = 0; i < userType.length; i++) {
        if (userType[i].checked) {
            userType = userType[i].value;
            break;
        }
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            user.userName = userName;
            user.userPhone = userPhone;
            user.userCountry = userCountry;
            user.userCity = userCity;
            user.userType = userType;
            firestore.collection(userType).add({
                userName,
                userEmail: email,
                userPhone,
                userCountry,
                userCity,
            })
            userName = document.getElementById("username").value = "";
            email = document.getElementById("useremail").value = "";
            userPhone = document.getElementById("userphone").value = "";
            userCountry = document.getElementById("usercountry").value = "";
            userCity = document.getElementById("usercity").value = "";
            password = document.getElementById("userpassword").value = "";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

}