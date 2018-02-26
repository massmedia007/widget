'use strict';

angular.module('myApp.PostsCtrlAjax', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/PostsCtrlAjax', {
            templateUrl: 'view1/PostsCtrlAjax.html',
            controller: 'PostsCtrlAjax'
        });
    }])

    .controller('PostsCtrlAjax', function ($scope, $http) {
        $http.get('https://api.myjson.com/bins/kyxat').success(function (data) {
            $scope.widgets = data;
            var myarray = Object.values($scope.widgets)[0];
            Array.prototype.groupBy = function (prop) {
                return this.reduce(function (groups, item) {
                    const val = item[prop]
                    groups[val] = groups[val] || []
                    groups[val].push(item)
                    return groups
                }, {})
            };
            $scope.grouped = myarray.groupBy('type');
            console.log($scope.grouped);
            for (var key in $scope.grouped) {
                for (var i in $scope.grouped[key]) {
                    console.log(i, key);
                    // if ($scope.grouped[key][i]) {
                    //     $scope.last = moment.duration(moment(moment().toDate().getTime()).diff(moment($scope.grouped[key][i].timeCreated))).humanize();
                    //     // console.log($scope.grouped[key][i].timeCreated );
                    //     console.log('key ='+key+ '  time='+$scope.grouped[key][i].timeCreated );
                    //     if ($scope.last[key] < $scope.grouped[key][i].timeCreated && $scope.grouped[key][i].timeCreated != undefined) {
                    //         $scope.last[key] = $scope.grouped[key][i + 1].timeCreated;
                    //         // console.log('key ='+key+ 'time='+$scope.last[key]);
                    //     }
                    // }
                }
            }
        })
    })


    .filter('time', function () {
        return function (date, timeCreated) {
            var start = moment(timeCreated);
            var end = moment().toDate().getTime();
            return moment.duration(moment(end).diff(moment(start))).humanize() + ' ago!';
        }
    });

// {
//     "wigdets"
// :
//     [{
//         "type": "Critical",
//         "tyme": "es5",
//         "timeCreated": 1519370371619,
//         "name": "bla-bla-1",
//         "info1": "bla-bla-1",
//         "info2": "bla-bla-1",
//         "info3": "bla-bla-1",
//         "info4": "bla-bla-1",
//         "info5": "bla-bla-1"
//     }, {
//         "type": "Major",
//         "target": "es5",
//         "timeCreated": 1519370405741,
//         "name": "bla-bla-2",
//         "info1": "bla-bla-2",
//         "info2": "bla-bla-2",
//         "info3": "bla-bla-2",
//         "info4": "bla-bla-2",
//         "info5": "bla-bla-2"
//     }, {
//         "type": "Major",
//         "target": "es5",
//         "timeCreated": 1519370426405,
//         "name": "bla-bla-3",
//         "info1": "bla-bla-3",
//         "info2": "bla-bla-3",
//         "info3": "bla-bla-3",
//         "info4": "bla-bla-3",
//         "info5": "bla-bla                          