// angular.module('myApp.view1', ['ngRoute'])
//     .controller('PostsCtrlAjax', function ($scope, $http) {
//         $http.get('https://api.myjson.com/bins/kyxat').success(function (data) {
//             $scope.widgets = data;
//             var myarray = Object.values($scope.widgets)[0];
//
//
//             // var name =myarray.forEach(function (item, i, myarray) {
//             //    return myarray[i].type;
//             //     // console.log(name[i]);
//             //     // console.log( myarray[i].type);
//             // });
//             // console.log(name);
//
//             // ---------------
//             var critical = myarray.filter(function (value) {
//                 return value.type === 'Critical';
//             });
//             $scope.critical = critical;
//             var major = myarray.filter(function (value) {
//                 return value.type === 'Major';
//             });
//             $scope.major = major;
//
//             // -------------------
//             // var arrays = myarray.map(function (elem) {
//             //     return elem.type;
//             // });
//             // console.log(arrays);
//
//             // -----------
//             for (var i = 0; i < myarray.length; i++) {
//
//             }
//         });
//     });