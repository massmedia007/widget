'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', function ($scope, $http) {
        // $http.get('https://api.myjson.com/bins/cx0kl').success(function (data) {
        $http.get('https://api.myjson.com/bins/jqg7x').success(function (data) {
            $scope.person = data;
            var myarray = Object.values($scope.person)[0][0];

            // var a =JSON.stringify(myarray).replace(/null/g, '"word"');
            // console.log(JSON.parse(JSON.stringify(myarray).replace(/null/g, '"word"')));


            function check(arr, value1, value2) {
                for (var key in arr) {
                    if (arr[key] instanceof Object && arr.length) {
                        check(arr[key], value1, value2);
                    } else if (arr[key] === value1) {
                        arr[key] = value2;
                    }
                }
                return arr
            }

            var some = check(myarray, null, "smthing");
            console.log(some);
        })
    });


// {
//     "Person"
// :
//     [{
//         "Opendata": {
//             "About": {
//                 "Somedata": {
//                     "Weight": [{"ru": 80, "eng": 176.4}],
//                     "Height": [{"ru": 180, "eng": 5.11}],
//                     "Fullname": {"Name": "Ivan", "Surname": "Petrov", "Midname": null}
//                 }, "Otherdate": null
//             },
//             "Habits": [{"goodhabits": {"habit1": "reading", "habit2": "swimming"}, "badhabits": {"habit1": null}}]
//         },
//         "Closeddata": {"About": {"secretagent": {"country": "Ukraine", "since": 2000, "rank": null}}}
//     }
//     ]
// }