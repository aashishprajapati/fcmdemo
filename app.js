// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPGp7opJD5mJ50jLjjO-C2okOg7pLnOnM",
    authDomain: "ipay-hrmanager.firebaseapp.com",
    databaseURL: "https://ipay-hrmanager.firebaseio.com",
    projectId: "ipay-hrmanager",
    storageBucket: "ipay-hrmanager.appspot.com",
    messagingSenderId: "26915370858",
    appId: "1:26915370858:web:9fd2833f9e12bafbb89713",
    measurementId: "G-32W3K75GKQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.getMessaging();
  
  messaging.requestPermission()
  .then((permission) => {
      console.log("permission: " + permission);
    
  })
  .catch((err) => {
    console.log(err);
  
  });