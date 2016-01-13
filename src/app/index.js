'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
    'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                      $mdIconProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('student', {
                url: '/student',
                templateUrl: 'app/views/student_error_bucket.html',
                controller:'StudentController',
                controllerAs: 'vm'
            })
            .state('student_dashboard', {
                url:'/student/dashboard',
                templateUrl: 'app/views/student_dashboard.html'
            })
            .state('learning_session', {
                url:'/student/learning_session',
                templateUrl:'app/views/student_learning_session.html'
            })
            .state('student_report', {
                url:'/student/report',
                templateUrl:'app/views/student_report.html'
            })
            .state('singin', {
                url: '/signin',
                templateUrl: 'app/views/signin.html',
                controller: 'SignInController',
                ControllerAs: 'vm'
                //data: {
                //  title: 'Welcome, Mentor'
                //}
            })
            .state('home.dashboard', {
                url: '/dashboard',
                controller: 'TableController',
                controllerAs: 'vm',
                templateUrl: 'app/views/mentor_dashboard.html',
                data: {
                    //title: 'Dashboard'
                    title: 'Table'
                }
            })
            .state('home.profile', {
                url: '/profile',
                templateUrl: 'app/views/mentor_accounts.html',
                controller: 'ProfileController',
                controllerAs: 'vm',
                data: {
                    title: 'Profile'
                }
            })
            .state('home.table', {
                url: '/table',
                controller: 'TableController',
                controllerAs: 'vm',
                templateUrl: 'app/views/mentor_reports.html',
                data: {
                    title: 'Table'
                }
            })
            .state('home.students', {
                url: '/students',
                controller: 'MentorClassListController',
                controllerAs: 'vm',
                templateUrl: 'app/views/mentor_class_list.html',
                data: {
                    //title: 'Dashboard'
                    title: 'Table'
                }
            });

        $mdThemingProvider
            .theme('default')
            //.primaryPalette('grey', {
            //  'default': '600'
            //})
            //.accentPalette('teal', {
            //  'default': '500'
            //})
            .warnPalette('defaultPrimary');

        $mdThemingProvider.theme('dark', 'default')
            .primaryPalette('defaultPrimary')
            .dark();

        $mdThemingProvider.theme('grey', 'default')
            .primaryPalette('grey');

        $mdThemingProvider.theme('custom', 'default')
            .primaryPalette('defaultPrimary', {
                'hue-1': '50'
            });

        $mdThemingProvider.theme('studentTheme')
            .primaryPalette('cyan')
            .accentPalette('orange')
            .warnPalette('lime');


        $mdThemingProvider.definePalette('defaultPrimary', {
            '50':  '#FFFFFF',
            '100': 'rgb(255, 198, 197)',
            '200': '#E75753',
            '300': '#E75753',
            '400': '#E75753',
            '500': '#E75753',
            '600': '#E75753',
            '700': '#E75753',
            '800': '#E75753',
            '900': '#E75753',
            'A100': '#E75753',
            'A200': '#E75753',
            'A400': '#E75753',
            'A700': '#E75753'
        });

        $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
    });
