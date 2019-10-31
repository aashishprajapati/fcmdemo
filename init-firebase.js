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

messaging
  .requestPermission()
  .then(function() {
    console.log("Permission");
    return messaging.getToken();
  })
  .then(token => {
    console.log("Client token: \n'n" + token);
  })
  .catch(err => {
    console.log(err);
  });


messaging.onMessage(payload => {
    console.log(payload);
    $.notify({
      // options
      title: payload.notification.title,
      message: payload.notification.body,
    },{
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 20,
      spacing: 10,
      z_index: 1031,
      delay: 5000,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>' 
    });
});
