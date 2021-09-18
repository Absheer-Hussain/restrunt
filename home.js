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