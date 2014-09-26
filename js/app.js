angular.module('gappers', ['ngRoute', 'appRoutes', 'MainCtrl', 'TeamCtrl','DocsCtrl','MeetingsCtrl','ContactCtrl', 'ProjectCtrl']);

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});