angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/project', {
			templateUrl: 'views/project.html',
			controller: 'ProjectController'
		})

		.when('/team', {
			templateUrl: 'views/team.html',
			controller: 'TeamController'
		})

		.when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'MeetingsController'
		})

		.when('/docs', {
			templateUrl: 'views/docs.html',
			controller: 'DocsController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})

		.otherwise({
			templateUrl:'views/404.html',
			controller: 'MainController'});

		
	$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(true);

}]);