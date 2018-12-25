app.controller("registryCtrl",function ($scope,$http) {
    var data = { "username": "yorkson", "password": "12345"};

    var config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//application/json
    };
    console.log(data);
    $http.post("http://localhost:8081/api/login", data, config).then(function (response) {
        console.log(response);
        $scope.hello=response.data.data;
    });
    
})