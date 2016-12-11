var app = angular.module('myApp', []);

app.controller('warController', ['$scope', '$http', function($scope, $http) {
    $http({
        method: "GET",
        url: "http://localhost:3000/battle/battleYear/300"
    }).then(function mySucces(response) {
        $scope.battleDetails = response.data;
        console.log(response.data);
    }, function myError(response) {
        $scope.battleDetails = response.statusText;
    });
}]);


app.controller('kingController', ['$scope', '$http', function($scope, $http) {
    $scope.fetchAllDetails = function() {
        $http({
            method: "GET",
            url: "http://localhost:3000/battle/fetch"
        }).then(function mySucces(response) {
            $scope.kingDetails = response.data;
            console.log(response.data);
        }, function myError(response) {
            $scope.kingDetails = response.statusText;
        });
    }
}]);

app.controller('yearController', ['$scope', '$http', function($scope, $http) {
    $scope.fetchByYear = function() {
    	var year = $scope.yearValue;

    	var urlYear = "http://localhost:3000/battle/battleYear/" + year;
        $http({
            method: "GET",
            url: urlYear
        }).then(function mySucces(response) {
            $scope.kingDetails = response.data;
            console.log(response.data);
        }, function myError(response) {
            $scope.kingDetails = response.statusText;
        });
    }
}]);

