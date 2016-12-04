(function() {
    'use strict';

    angular
        .module('cos482App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('emitir-diploma', {
            parent: 'operations',
            url: '/emitir-diploma',
            data: {
                authorities: ['ROLE_SECRETARIO_ACADEMICO'],
                pageTitle: 'global.menu.operations.emitir_diploma'
            },
            views: {
                'content@': {
                    templateUrl: 'app/operations/emitir-diploma/emitir-diploma.html',
                    controller: 'EmitirDiplomaController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                	$translatePartialLoader.addPart('emitir-diploma');
                	$translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }],
                log_entity: function () {
                    return {
                        id: null,
                        timestampFuncao: null,
                        funcao: 6,
                        username: null
                    };
                }
            }
        });
    }
})();
