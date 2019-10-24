// firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPGp7opJD5mJ50jLjjO-C2okOg7pLnOnM",
  authDomain: "ipay-hrmanager.firebaseapp.com",
  databaseURL: "https://ipay-hrmanager.firebaseio.com",
  projectId: "ipay-hrmanager",
  storageBucket: "ipay-hrmanager.appspot.com",
  messagingSenderId: "26915370858",
  appId: "1:26915370858:web:9fd2833f9e12bafbb89713",
  measurementId: "G-32W3K75GKQ"
};

// firebase initialization
firebase.initializeApp(firebaseConfig);

// firebase messaging instance
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BOCgMYOSVRyaS6TFl5FCOTfED7GyrvnZUy9AKzgcQBjg2jwSPiWjX9xiF8MosgjdF-p3MwC6MdVSJe-QhiSimMI"
);

messaging.requestPermission()
.then(() => {
    console.log("Permission granted.");
    return messaging.getToken();
})
.then(token => {
    console.log("Client token: \n'n" + token);
})
.catch((err) => {
    console.log(err);
});
