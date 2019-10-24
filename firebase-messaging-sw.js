importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");

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
  
  messaging.onBackgroundMessageHandler(payload => {
      const title = "IPay HR Manager";
      const options = {
          body: "User aashish2102 is now offline."
      };

      return self.registration.showNotification(title, options);
  });