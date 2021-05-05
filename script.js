    var app = angular.module('myApp', ['ngResource']);
app.filter('trusted', ['$sce', function ($sce) {
   return $sce.trustAsResourceUrl;
}]);
    app.controller('myController',
        function ($scope, $http) {

            var request = {
                method: 'get',
                url: 'https://krds-assignment.github.io/aoc/api-assets/data.json',
                dataType: 'json',
                contentType: "application/json"
            };

            var getdatafromjson = [];

            $http(request)
                .success(function (jsonData) {
                    getdatafromjson = jsonData;
                    $scope.dataforload = getdatafromjson;
                    $scope.logo = $scope.dataforload.logo;
                    
            for (var i = 0; i < $scope.dataforload.features.length; i++) {

                if($scope.dataforload.features[i].title == "Astonishing features requires worry-free security"){
                   $scope.sec_logo = $scope.dataforload.features[i].logo;
                   $scope.sec_img = $scope.dataforload.features[i].image;
                   $scope.sec_desc = $scope.dataforload.features[i].desc;
                } else if ($scope.dataforload.features[i].title == "Be hooked!") {
                    $scope.D_logo = $scope.dataforload.features[i].logo;
                    $scope.D_img = $scope.dataforload.features[i].image;
                    $scope.D_desc = $scope.dataforload.features[i].desc;
                } else if ($scope.dataforload.features[i].title == "The best things in life are free") {
                    $scope.Adaptxt_logo = $scope.dataforload.features[i].logo;
		    $scope.Adaptxt_img = $scope.dataforload.features[i].image;
                    $scope.Adaptxt_desc = $scope.dataforload.features[i].desc;
                } else if ($scope.dataforload.features[i].title == "The thump never ends here") {
                    $scope.Hungama_logo = $scope.dataforload.features[i].logo;
                    $scope.Hungama_img = $scope.dataforload.features[i].image;
                    $scope.Hungama_desc = $scope.dataforload.features[i].desc;
                } else if ($scope.dataforload.features[i].title == "Being globally you") {
                    $scope.adap_logo = $scope.dataforload.features[i].logo;
                    $scope.adap_img = $scope.dataforload.features[i].image;
                    $scope.adap_desc = $scope.dataforload.features[i].desc;
                } else if ($scope.dataforload.features[i].title == "For the wise") {
                    $scope.readwhere_logo = $scope.dataforload.features[i].logo;
                    $scope.readwhere_img = $scope.dataforload.features[i].image;
                    $scope.readwhere_desc = $scope.dataforload.features[i].desc;
                } else {
                }
            }
                })
                .error(function () {

                });
        });