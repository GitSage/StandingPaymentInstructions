var app = angular.module('app', ['ngMessages']);

app.controller('MainCtrl', function($scope) {
    $scope.submitForm = function(isValid) {
        $scope.submitted = true;
        if (isValid) {
            $scope.formSuccess=true;
        }
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