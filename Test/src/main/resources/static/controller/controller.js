var app=angular.module("myApp",[]);
app.controller("myCon",function ($scope,$http) {
    $http.get("/test").then(function (response) {

        $scope.hello=response.data.username;
    })
    var data = { "username": "yorkson", "password": "12345"};

    var config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//application/json
        //transformRequest: function (obj) {
        //    var str = [];
        //    for (var p in obj) {
        //        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        //    }
        //    return str.join("&");
        //}
    };
    console.log(data);
    $http.post("http://localhost:8081/api/login", data, config).then(function (response) {
        console.log(response);
        $scope.hello=response.data.data;
    });
    /*$http.post("http://localhost:8081/api/flights").then(function (response,status,headers,config) {
        console.log(response);
        console.log(status);
        console.log(headers);
        console.log(config);
        $scope.hello=response.data.data;
    })*/
})