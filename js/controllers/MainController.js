app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'img/cleaning.jpg',
      name: 'Cleaning the House',
      count: 15
    },
    {
      icon: 'img/cooking.jpg',
      name: 'Cooking',
      count: 30
    },
    {
      icon: 'img/laundry.jpg',
      name: 'Doing the Laundry',
      count: 10
    },
    {
      icon: 'img/sleep.jpg',
      name: 'Doing Homework',
      count: 20
    },
    {
      icon: 'img/washing.jpg',
      name: 'Washing My Car',
      count: 4
    }
  ];
  $scope.increase = function(index) {
     $scope.exercises[index].count += 1;
  };
  $scope.decrease = function(index) {
     $scope.exercises[index].count -= 1;
  };

}]);
