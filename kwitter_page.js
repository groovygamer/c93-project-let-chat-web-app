const firebaseConfig = {
    apiKey: "AIzaSyCkk3DqAeWTaHxJ3NGa8u68VxLicvFBqSg",
    authDomain: "kwitter-9c908.firebaseapp.com",
    databaseURL: "https://kwitter-9c908-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c908",
    storageBucket: "kwitter-9c908.appspot.com",
    messagingSenderId: "929334668838",
    appId: "1:929334668838:web:edb695c2516426a64b80e7"
  };
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
function logout(){
    window.location="index.html";
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
}