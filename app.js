var app = angular.module('app', ['ngMessages', 'ngRoute']);

app.config(function($routeProvider){
    $routeProvider

        .when('', {
            templateUrl : 'pages/standingPayment.html',
            controller: 'MainCtrl'
        })

        // standing payment page
        .when('/', {
            templateUrl : 'pages/standingPayment.html',
            controller: 'MainCtrl'
        })

        // source page
        .when('/source', {
            templateUrl : 'pages/source.html',
            controller: 'SourceCtrl'
        });
});

app.controller('AboutCtrl', function($scope){
    console.log("About page");
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('SourceCtrl', function($scope){});

app.controller('MainCtrl', function($scope) {
    $scope.submitForm = function(isValid) {
    };
});

// Format phone numbers properly.
app.directive('formatPhone', [
        function() {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function(scope, elem, attrs, ctrl, ngModel) {
                    elem.add(phoneNumber).on('keyup', function() {
                       var origVal = elem.val().replace(/[^\w\s]/gi, '');
                       if(origVal.length === 10) {
                         var str = origVal.replace(/(.{3})/g,"$1-");
                         var phone = str.slice(0, -2) + str.slice(-1);
                         jQuery("#phoneNumber").val(phone);
                       }

                    });
                }
            };
        }
    ]);



