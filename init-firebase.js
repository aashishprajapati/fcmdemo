/*
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    "type": "service_account",
    "project_id": "ipay-hrmanager",
    "private_key_id": "d2ebbb9189c09091688ec56eed4df3a31c1a5f8f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwKS0JxUqoe6my\n5B7ovI8m58r4k8R/tVRRDCDtdlPOUSqLpka3IwNhctzo7UpNgqoBfa5UD4FgUNnc\ncw1dnv+uisn/jYt/KMhlCy6lcBzVxgTYvSDTcQHk9uP2VZrLnDl6mpsV3iKBY5RB\nyvxZhFjaJUtjGq7y6ZwNvbAlb3COU/jSWkvKjtkaIHyXe2+kGUoRHzj7w11XTpKu\nrguXCx0XMu3TYJvKKUC4oAmlyszD8VQUlNgekjvXODKk8AzW8YmP0X0J8j52RjEN\nUTB89MmtIdziuYq43i0Zj5XH0LFXE6DYDy6CXUUsdwbgDxJKNgUH4J0zbChvMnLy\nwstIR8P/AgMBAAECggEAEnsnZfSEShu7KHDlSz5o+EhuE1kRTuKbp2sR00fMMAN0\n5rS5i4IJW0JdKbSnTG1uX3yretcrmAqzaHzLhKxnH40g9wYHAf6p02vyZ1nVNJoz\nLPfeh0A+ViKOtOuzMzQ/FX090vP8g72KMsLUaaHIXo52E74bZ5GZlRl27t57nPrG\nM6+FbehN/IqpBVXrs8r6XZiaN3hgyQSZeuCfLTf19CFafAHxDT+kKjH7UHtcuJzf\nTgDx6PM621WQfuy5PSheqts0fmoaqUAwbV5GoOiS6Dsy3Hq+Af3OGQcAQ3k8bAen\nHbl6LasvSmBfOA6zOZFkpGnUNohk9sDPWB+DUEozBQKBgQD3wb4K/2HuRhuaeolx\nR3a3TY9FaS7FSeksezWzeUX53wyOcx7sqHcF/YiPDfxWORB4cBew29nU2manCs71\nVOuBFPPldSWjObLUMaEtq1apDX+3NTiCMU70XdNqxbVhLD/Df7NS7S/4D6MwNyn8\n32CNVT4CxGlJicW20uNr4HvuewKBgQC2BZ49pmrI84gqs0J9yT0pWkkMA4Z0SxPz\nX5HPXO6NuQqXjFNLHWz/JPqRC9avI3odYheLwhdpQaXbot76NZ21/70XvCuRaY85\nIVzeTeoqWUuJytviSChStcYiww0v1q0/ddzujD74WRDEkRsGU+S+gToofDTgKBmb\nas+DdHlLTQKBgQDV1sXljhkDZEVs5rh8Klc/zNSM70TsCWgU+V8XQePwz+BxjtEx\nKBJa/EICXurdrLEXkoAQKSFxQvP41y5bt2jw55m/AYZzxFgiJ5fa6BiLHtiN04Sr\nck2YQuc4L97mOR/r5+tp9shBTZXnBqXZ2R7nvZwhHU9WpnAc5RZfRMkSwwKBgEAf\nJIqVSIL3/50DP0YukUQzEQ6RY1kuZZ3TqfsBwuvcJtYSUflhKVeMgFR+dieGeOtG\n9gJ+4l5rCPGho6lDIAbQS53D5Rk5tYGrthp+GiLHCCxHcUR6pPHWJTFzwv56Qtfb\nPnQupbQ5NAX7FCkbfrZ5sbI3Zy0cE0FD1Ex7yIr1AoGACnLA0U3tQRuJLiU5yz9E\nb+dNX6pVdqGIhaRlnTS9nIBqm99e+7sJOhNh30G1c+5ZhiwEnBb8Yf1v1ZYL91DX\nPDMEJAN6FWFH4rt0R2IQ30bVki9+rybUT+GBgeEJSykrj9/Jd026yOKQ+9wSA2zo\n3dibz3d4fipN0VdcJv+aYXw=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-h1sbg@ipay-hrmanager.iam.gserviceaccount.com",
    "client_id": "100787272634023554459",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h1sbg%40ipay-hrmanager.iam.gserviceaccount.com"
// "messagingSenderId":"26915370858"
};

// Initialize Firebase
const fcmApp = firebase.initializeApp({
    "messagingSenderId": "26915370858"
});

console.log(fcmApp);
const messaging = firebase.messaging();

// [END get_messaging_object]
// [START set_public_vapid_key]
// Add the public key generated from the console here.
messaging.usePublicVapidKey('BOCgMYOSVRyaS6TFl5FCOTfED7GyrvnZUy9AKzgcQBjg2jwSPiWjX9xiF8MosgjdF-p3MwC6MdVSJe-QhiSimMI');
// [END set_public_vapid_key]

// IDs of divs that display Instance ID token UI or request permission UI.
const tokenDivId = 'token_div';
const permissionDivId = 'permission_div';


// [START refresh_token]
// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
        console.log('Token refreshed.');
// Indicate that the new Instance ID token has not yet been sent to the
// app server.
        setTokenSentToServer(false);
// Send Instance ID token to app server.
        sendTokenToServer(refreshedToken);
// [START_EXCLUDE]
// Display new Instance ID token and clear UI of all previous messages.
        resetUI();
// [END_EXCLUDE]
    }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
        showToken('Unable to retrieve refreshed token ', err);
    });
});
// [END refresh_token]

// [START receive_message]
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
// [START_EXCLUDE]
// Update the UI to include the received message.
    appendMessage(payload);
// [END_EXCLUDE]
});

// [END receive_message]

function resetUI() {
    clearMessages();
    showToken('loading...');
    // [START get_token]
    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken()
        .then((currentToken) => {
        	console.log(currentToken);
            if (currentToken) {
                sendTokenToServer(currentToken);
                updateUIForPushEnabled(currentToken);
            } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                updateUIForPushPermissionRequired();
                setTokenSentToServer(false);
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token.\n\n ', err);
            showToken('Error retrieving Instance ID token. ', err);
            setTokenSentToServer(false);
        });
    // [END get_token]
}


function showToken(currentToken) {
// Show token in console and UI.
    const tokenElement = document.querySelector('#token');
    tokenElement.textContent = currentToken;
}

// Send the Instance ID token your application server, so that it can:
// - send messages back to this app
// - subscribe/unsubscribe the token from topics
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
        console.log('Sending token to server...');
// TODO(developer): Send the current token to your server.
        setTokenSentToServer(true);
    } else {
        console.log('Token already sent to server so won\'t send it again ' +
            'unless it changes');
    }

}

function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
}

function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
}

function showHideDiv(divId, show) {
    const div = document.querySelector('#' + divId);
    if (show) {
        div.style = 'display: visible';
    } else {
        div.style = 'display: none';
    }
}

function requestPermission() {
    console.log('Requesting permission...');
// [START request_permission]
    Notification.requestPermission()
    .then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
// TODO(developer): Retrieve an Instance ID token for use with FCM.
// [START_EXCLUDE]
// In many cases once an app has been granted notification permission,
// it should update its UI reflecting this.
            resetUI();
// [END_EXCLUDE]
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
// [END request_permission]
}

function deleteToken() {
    // Delete Instance ID token.
    // [START delete_token]
    messaging.getToken()
        .then((currentToken) => {
            messaging.deleteToken(currentToken).then(() => {
                console.log('Token deleted.');
                setTokenSentToServer(false);
                // [START_EXCLUDE]
                // Once token is deleted update UI.
                resetUI();
                // [END_EXCLUDE]
            }).catch((err) => {
                console.log('Unable to delete token. ', err);
            });
            // [END delete_token]
        })
        .catch((err) => {
            console.log('Error retrieving Instance ID token. ', err);
            showToken('Error retrieving Instance ID token. ', err);
        });

}

// Add a message to the messages element.
function appendMessage(payload) {
    const messagesElement = document.querySelector('#messages');
    const dataHeaderELement = document.createElement('h5');
    const dataElement = document.createElement('pre');
    dataElement.style = 'overflow-x:hidden;';
    dataHeaderELement.textContent = 'Received message:';
    dataElement.textContent = JSON.stringify(payload, null, 2);
    messagesElement.appendChild(dataHeaderELement);
    messagesElement.appendChild(dataElement);
}

// Clear the messages element of all children.
function clearMessages() {
    const messagesElement = document.querySelector('#messages');
    while (messagesElement.hasChildNodes()) {
        messagesElement.removeChild(messagesElement.lastChild);
    }
}

function updateUIForPushEnabled(currentToken) {
    showHideDiv(tokenDivId, true);
    showHideDiv(permissionDivId, false);
    showToken(currentToken);
}

function updateUIForPushPermissionRequired() {
    showHideDiv(tokenDivId, false);
    showHideDiv(permissionDivId, true);
}

// resetUI();*/

// Your web app's Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(permission => {
    console.log("granted");
    return messaging.getToken();
  })
  .then(token => {
    console.log(token);
  })
  .catch(err => {
    console.log(err);
  });
