app.controller("TodoCtrl", function($scope) {

  $scope.title = 'Angular Todo - PFM!';
  $scope.filter2 ='';
  $scope.potato = '';
  $scope.variableName = '';

  $scope.newTodo ='';

  $scope.tasks = [
    { name: "Make the bed", type: "home"},
    { name: "Eat breakfast", type: "home"},
    { name: "Check the network", type: "work"},
    { name: "Start up Slack", type: "work"},
    { name: "Feed the cats", type: "home"}
  ];

  $scope.addTodo = function() {
    $scope.tasks.push({ name: $scope.newTodo, type: "home"});
    $scope.newTodo ='';
  }

  $scope.removeTodo = (task) => {
    const taskIndex = $scope.tasks.indexOf(task);
    $scope.tasks.splice(taskIndex, 1);
  }

})
