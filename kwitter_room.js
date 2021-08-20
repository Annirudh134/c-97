
var firebaseConfig = {
      apiKey: "AIzaSyCTfnpkFBudBwoE6sdi1a4vrTOk9eJCnEE",
      authDomain: "kwitter-4f0cd.firebaseapp.com",
      databaseURL: "https://kwitter-4f0cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-4f0cd",
      storageBucket: "kwitter-4f0cd.appspot.com",
      messagingSenderId: "300205233966",
      appId: "1:300205233966:web:2f157cc23c63ee21738cbf"
    };
    
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
 {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'
       document.getElementById("output").innerHTML += row;
      
      });
});

}
getData();

function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";  
}
