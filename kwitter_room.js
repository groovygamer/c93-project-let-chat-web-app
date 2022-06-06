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
   document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    console.log("Room_Name -"+ Room_names);
    row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    
    });});}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location= "kwitter_page.html";
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    window.location="index.html";
}