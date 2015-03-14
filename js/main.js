angular.module('main', ['datalab']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:SearchCtrl, templateUrl:'views/utility_search.html'}).
      when('/join', {controller:JoinCtrl, templateUrl:'views/login_registration.html'}).
       when('/login', {controller:LoginCtrl, templateUrl:'views/login_login.html'}).
       when('/lostpassword', {controller:ForgotCtrl, templateUrl:'views/login_lostpassword.html'}).
       when('/lostusername', {controller:ForgotCtrl, templateUrl:'views/login_lostusername.html'}).
     /*when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).*/
      otherwise({redirectTo:'/'});
  });
 
 function SearchCtrl( $scope, Users ) {
  $scope.projects = Users.query();
}
 
function JoinCtrl( $scope, User ) {
  $scope.projects = User.query();
}

function LoginCtrl( $scope, User ) {
  $scope.projects = User.query();
}
function ForgotCtrl( $scope, User ) {
  $scope.projects = User.query();
}
 
 /*
function CreateCtrl($scope, $location, Project) {
  $scope.save = function() {
    Project.save($scope.project, function(project) {
      $location.path('/edit/' + project._id.$oid);
    });
  }
}
 
 
function EditCtrl($scope, $location, $routeParams, Project) {
  var self = this;
 
  Project.get({id: $routeParams.projectId}, function(project) {
    self.original = project;
    $scope.project = new Project(self.original);
  });
 
  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }
 
  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/list');
    });
  };
 
  $scope.save = function() {
    $scope.project.update(function() {
      $location.path('/');
    });
  };
}*/