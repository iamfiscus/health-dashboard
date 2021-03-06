var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory){


});

app.controller('deductibleCtrl', function($scope, $timeout, $location, healthFactory) {
    // $scope.ammountPaid = healthFactory.chartCtrl();
    $scope.amountPaid = function(){
        var chart = document.getElementById("newChart");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame(){
            if (width >= 33) {
                clearInterval(id);
            } else {
                width++;
                console.log(width);
                chart.style.width = width + '%'
            }
        }
    }

    $scope.amountPaid2 = function(){
        var graph = document.getElementById("newGraph");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame(){
            if (width >= 75) {
                clearInterval(id);
            } else {
                width++;
                console.log(width);
                graph.style.width = width + '%'
            }
        }
    }
    $scope.userObject = healthFactory.getLogin();  

    $scope.go = function(path){
        $location.path(path)
    }
});


app.controller('dashboardCtrl', function($scope, $timeout, $location, healthFactory){
    
        

        $scope.userObject = healthFactory.getLogin();   
        
        $scope.go = function(path){
            $location.path(path)
        }
        $scope.userCare=healthFactory.getPrevCare()

        $scope.date=healthFactory.getDate();

});


app.controller('loginCtrl', function($scope, $timeout, $location, healthFactory){
    
    $scope.time = healthFactory.setDate();

    $scope.submitWords=function(userInfo){
        healthFactory.setPrevCare();
        healthFactory.checkLogin(userInfo).then(function(){
            $scope.loginError= true;
        });
    };

    $scope.inputType = 'password';
    // Hide & show password function
    $scope.hideShowPassword = function(){
      if ($scope.inputType == 'password')
        $scope.inputType = 'text';
      else
        $scope.inputType = 'password';
    };
   
});

