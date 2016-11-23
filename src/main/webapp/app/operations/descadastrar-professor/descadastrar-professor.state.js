(function() {
    'use strict';

    angular
        .module('cos482App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('descadastrar-professor', {
            parent: 'operations',
            url: '/descadastrar-professor',
            data: {
                authorities: ['ROLE_SECRETARIO_ACADEMICO', 'ROLE_ADMIN'],
                pageTitle: 'global.menu.operations.descadastrar_professor'
            },
            views: {
                'content@': {
                    templateUrl: 'app/operations/descadastrar-professor/descadastrar-professor.html',
                    controller: 'DescadastrarProfessorController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                	$translatePartialLoader.addPart('descadastrar-professor');
                	$translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('descadastrar-professor-detail', {
            parent: 'descadastrar-professor',
            url: '/descadastrar-professor/{id}',
            data: {
                authorities: ['ROLE_SECRETARIO_ACADEMICO', 'ROLE_ADMIN'],
                pageTitle: 'descadastrar-professor.professor'
            },
            views: {
                'content@': {
                    templateUrl: 'app/operations/descadastrar-professor/descadastrar-professor-detail.html',
                    controller: 'DescadastrarProfessorDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('descadastrar-professor');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Professor', function($stateParams, Professor) {
                    return Professor.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'descadastrar-professor',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        });
    }
})();
