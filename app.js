define([

], function () {
    var app = angular.module("app", ['ngRoute','ngAnimate','LocalStorageModule','angular-growl']);
    app.config(['$routeProvider','$locationProvider','$httpProvider', function($routeProvider,$locationProvider,$httpProvider){
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider.when('/:params',
            {
                template    : '<div data-ng-controller="controller" id="view"></div>',
                controller  : 'DynamicController'
            }
        ).when('/:params/:actions',
            {
                template    : '<div data-ng-controller="controller" id="view"></div>',
                controller  : 'DynamicController'
            }
        ).otherwise({ redirectTo: 'beranda' });
        $locationProvider.hashPrefix("!");
    }]);

    app.controller('DynamicController', function ($scope, $routeParams, $compile) {
        $scope.actions = $routeParams['actions'];
        $scope.controller = function(){};
        require([
            './core/controller/ctrl.' + $routeParams['params'],
            'text!./core/view/'  + $routeParams['params'] + '.html'
        ], function(controller, view){
                $scope.controller = controller;

                var v = angular.element("#view").html(view);
                $compile(v)(v.scope());
                $scope.$apply();
            }
        );
    });

    app.filter('toHTML', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    });

    app.controller('CtrlHeader', function ($scope,localStorageService,$window,$location) {
        var tblC  = localStorage.getItem("todos");
                tblC = JSON.parse(tblC);
                if(tblC == null)    {
                    $scope.todos = [];
                } else {
                    $scope.todos = tblC;
                }

        $scope.remaining = function() {
                    var count = 0;
                    angular.forEach($scope.todos, function(todo){
                        count+= todo.done ? 0 : 1;
                    });
                    return count;
                };

        $scope.logout = function(){
                    localStorageService.clearAll();
                    localStorage.removeItem('todos');
                    $window.localStorage.clear();
                    $location.path('/');
                }

    });
   
    // app.baseUrlServer = 'http://localhost/melamar/knitto/server/';
     app.baseUrlServer = 'http://35.229.83.128/server/';
    return app;
});


