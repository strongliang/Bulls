angular.module('bullsApp', [])
    .controller('BullsController', function ($scope) {
        $scope.guesses = [];

        $scope.makeGuess = function (guess) {
            $scope.guesses.push(guess);
            $scope.guess = '';
            // console.log('you just guessed: ' + guess);
            console.log('all guesses: ' + $scope.guesses);
        };
    })
    .filter('reverse', function() {
      return function(items) {
        return items.slice().reverse();
      };
    })
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });