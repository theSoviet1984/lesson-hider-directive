angular.module('directivePractice')
.controller('lessonCtrl', function($scope, lessonService){

  $scope.test="Two-way data binding!"
 $scope.lessons=
 ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']

$scope.announceDay= function(lesson, day){
  alert('lesson '+ 'is active on '+ day + '.')
}
})
