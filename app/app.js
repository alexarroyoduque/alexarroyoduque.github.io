(function () {
    'use strict';

    angular
        .module('starterApp', ['ngMaterial', 'ngRoute', 'informations'])
        .controller('AppCtrl', ['$scope', 'infoService', '$mdSidenav', '$log', '$mdDialog', '$mdToast', '$location', PortfolioAppController])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('amber');
            // $mdThemingProvider.theme('sub')
            //     .primaryPalette('cyan');
        })
        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: './views/home.html'
                })
                .when('/about', {
                    templateUrl: './views/about.html'
                })
                .when('/personal', {
                    templateUrl: './views/personal.html'
                })
                .when('/professional', {
                    templateUrl: './views/professional.html'
                })
                .when('/contact', {
                    templateUrl: './views/contact.html'
                })
                .when('/', {
                    redirectTo: '/home'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        });

    function PortfolioAppController($scope, infoService, $mdSidenav, $log, $mdDialog, $mdToast, $location) {
        var devMessage,
            secretUnlocked = false,
            easter_egg;
        //http://textart4u.blogspot.com.es/2014/04/triforce-zelda-symbol-ascii-text-art.html
        devMessage =
            '\n' +
            'Un nuevo desafío ante ti...\n' +
            '────────────────▄────────────────\n' +
            '──────────────▄▀░▀▄──────────────\n' +
            '────────────▄▀░░░░░▀▄────────────\n' +
            '──────────▄▀░░░░░░░░░▀▄──────────\n' +
            '────────▄█▄▄▄▄▄▄▄▄▄▄▄▄▄█▄────────\n' +
            '───────▄▀▄─────────────▄▀▄───────\n' +
            '─────▄▀░░░▀▄─────────▄▀░░░▀▄─────\n' +
            '───▄▀░░░░░░░▀▄─────▄▀░░░░░░░▀▄───\n' +
            '─▄▀░░░░░░░░░░░▀▄─▄▀░░░░░░░░░░░▀▄─\n' +
            '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n' +
            '\n' +
            'Haz foco en cualquier parte del portafolio\n' +
            'e introduce el código Konami: \n' +
            '"▲, ▲, ▼, ▼, ◀, ▶, ◀, ▶, B, A".\n' +
            'Si usas un dispositivo táctil prueba con: \n' +
            '"▲, ▲, ▼, ▼, ◀, ▶, ◀, ▶, tap, tap".\n';

        $log.info(devMessage);

        function toggleSideNav(name) {
            $mdSidenav(name).toggle();
        }

        $scope.toggleSidenav = toggleSideNav;
        $scope.skills = [];
        $scope.educations = []
        $scope.projects = {
            personal: [],
            professional: []
        };
        $scope.socials = [];

        $scope.predicate = 'index';
        $scope.selectedIndex = 0;

        $scope.paths = [{
            path: 'home',
            text: 'Inicio',
            icon: 'icon-home',
            index: 0
        }, {
            path: 'about',
            text: 'Perfil',
            icon: 'icon-vcard',
            index: 1
        }, {
            path: 'personal',
            text: 'Proyectos personales',
            icon: 'icon-lamp',
            index: 2
        }, {
            path: 'professional',
            text: 'Experiencia',
            icon: 'icon-docs',
            index: 3
        }/*, {
            path: 'contact',
            text: 'Contacto',
            icon: 'icon-share',
            index: 4
        }*/];

        $scope.toolbarIcon = $scope.paths[0].icon;

        $scope.changeView = function (view) {
            $location.path(view);
        };

        $scope.$on('$routeChangeSuccess', function () {
            var currentPath = $location.path();
            switch (currentPath) {
            case '/' + $scope.paths[0].path:
                $scope.toolbarIcon = $scope.paths[0].icon;
                $scope.selectedIndex = $scope.paths[0].index;
                break;
            case '/' + $scope.paths[1].path:
                $scope.toolbarIcon = $scope.paths[1].icon;
                $scope.selectedIndex = $scope.paths[1].index;
                break;
            case '/' + $scope.paths[2].path:
                $scope.toolbarIcon = $scope.paths[2].icon;
                $scope.selectedIndex = $scope.paths[2].index;
                break;
            case '/' + $scope.paths[3].path:
                $scope.toolbarIcon = $scope.paths[3].icon;
                $scope.selectedIndex = $scope.paths[3].index;
                break;
            case '/' + $scope.paths[4].path:
                $scope.toolbarIcon = $scope.paths[4].icon;
                $scope.selectedIndex = $scope.paths[4].index;
                break;
            default:
                $scope.toolbarIcon = $scope.paths[0].icon;
                $scope.selectedIndex = $scope.paths[0].index;
            };
        });

        $scope.$watch('selectedIndex', function (newValue) {
            $scope.changeView($scope.paths[newValue].path);
        });

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
        }

        function ToastController($scope, $mdToast) {
            $scope.hide = function () {
                $mdToast.hide();
            };
        }

        $scope.showDialog = function (ev, dialogTemplate) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: dialogTemplate,
                targetEvent: ev,
            });
        };

        $scope.showCustomToast = function (toastTemplate) {
            $mdToast.show({
                controller: ToastController,
                templateUrl: toastTemplate,
                hideDelay: 7000,
                position: 'bottom left'
            });
        };

        $scope.openCV = function (argument) {
             window.open('http://bit.ly/17Eipdj' , '_blank');
        };

        function loadSkills() {
            infoService
                .loadSkills()
                .then(function (data) {
                    $scope.skills = [].concat(data);
                });
        }

        function loadPersonal() {
            infoService
                .loadPersonal()
                .then(function (data) {
                    $scope.projects.personal = [].concat(data);
                });
        }

        function loadSecrets() {
            infoService
                .loadSecrets()
                .then(function (data) {
                    $scope.projects.personal = $scope.projects.personal.concat(data);
                    secretUnlocked = true;
                    $scope.showCustomToast('views/personal/konami.html')
                    document.getElementById('secret').play(); // Better in directive :(
                    console.log('¡Nuevos proyectos personales disponibles!');
                });
        }

        function loadProfessional() {
            infoService
                .loadProfessional()
                .then(function (data) {
                    $scope.projects.professional = [].concat(data);
                });
        }

        function loadSocials() {
            infoService
                .loadSocials()
                .then(function (data) {
                    $scope.socials = [].concat(data);
                });
        }

        function loadEducations() {
            infoService
                .loadEducations()
                .then(function (data) {
                    $scope.educations = [].concat(data);
                });
        }
        loadSkills();
        loadEducations();
        loadPersonal();
        loadProfessional();
        loadSocials();

        easter_egg = new Konami();
        easter_egg.code = function() {
            if (!secretUnlocked) {
                loadSecrets();
            }
        }
        easter_egg.load();
    }
})();