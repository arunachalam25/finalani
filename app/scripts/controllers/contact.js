  'use strict';

angular.module('mytodoApp')
  .controller('contact', function ($scope,$location,dataservice,$window) {
  	
  	
  $scope.v=false;
  
$scope.details = function () {


	     
	      dataservice.details().then(
	        function (userData) {
	        	

	        	$scope.transname=$window.localStorage.trans;
	        	
	        	$scope.collection1 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

  	$scope.contact = function () {
  		var ao = {};
  	    $scope.v= true;
	    ao.from = $scope.from;
	    ao.to = $scope.to;

	    if (ao) {
	      dataservice.contact(ao).then(
	        function (authortrans) {
	        	$scope.collection = authortrans;

	        	
	        	
	         
	        },

	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 

  };
  
});