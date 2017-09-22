(function(){
	  // Initialize Firebase
	var config = {
		apiKey: "AIzaSyCwyHhQCEJky2WL76WDSm5u4FX9dVvnOGo",
		authDomain: "forward-web.firebaseapp.com",
		databaseURL: "https://forward-web.firebaseio.com",
		projectId: "forward-web",
		storageBucket: "forward-web.appspot.com",
		messagingSenderId: "800891063371"
	};
	firebase.initializeApp(config);
	angular
		.module("app", ['firebase'])
		.controller('homeController', function($firebaseObject, $scope){
			const rootRef = firebase.database().ref().child('Feeds');
			$scope.data = $firebaseObject(rootRef);

		});
}());

