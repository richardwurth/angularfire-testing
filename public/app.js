(function() {
  // Initialize Firebase
  var config = {

      apiKey: "AIzaSyDM4cG1TdsVTMes_RWAfegzUg97FlPc6X8",
      authDomain: "binding-71ed5.firebaseapp.com",
      databaseURL: "https://binding-71ed5.firebaseio.com",
      projectId: "binding-71ed5",
      storageBucket: "binding-71ed5.appspot.com",
      messagingSenderId: "36462406080"
    };
    firebase.initializeApp(config);

  angular
      .module('app', ['firebase'])
      .controller('MyCtrl', function($firebaseObject){
          const rootRef = firebase.database().ref().child('angular');
          const ref = rootRef.child('object');
          this.object = $firebaseObject(ref);
          let me = "Richard Wurth";
      });
  }());
