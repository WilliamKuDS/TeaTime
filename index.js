firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //Logged in  
      document.getElementById("login-div").style.display = "none";
      document.getElementById("user-div").style.display = "block";
      var user = firebase.auth().currentUser;

      if (user!=null){
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "Welcome User: " + email_id;
      }
    } else {
      // No user is signed in.
      document.getElementById("login-div").style.display = "block";
      document.getElementById("user-div").style.display = "none";
    }
  });
  
  function login() {
    var userEmail = document.getElementById("inputEmail").value;
    var userPassword = document.getElementById("inputPassword").value;
    
    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorMessage)
        // ..
      });
  }
  