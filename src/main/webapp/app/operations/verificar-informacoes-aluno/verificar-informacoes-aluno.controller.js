(function() {
    'use strict';

    angular
        .module('cos482App')
        .controller('VerificarInformacoesAlunoController', VerificarInformacoesAlunoController);

    VerificarInformacoesAlunoController.$inject = ['Principal', 'log_entity', 'LogDoSistema', '$window', '$scope', '$state', '$translate', 'Aluno'];

    function VerificarInformacoesAlunoController (Principal, log_entity, LogDoSistema, $window, $scope, $state, $translate, Aluno) {
        var vm = this;

        vm.alunos = [];

        loadAll();

        function loadAll() {
            Aluno.query(function(result) {
                vm.alunos = result;
                console.log(vm.alunos);
            });
        }

        function LogUseCase() {
            Principal.identity().then(function(account) {
                vm.log.username = account.login;
                vm.log.timestampFuncao = new Date();
                LogDoSistema.save(vm.log, function(){}, function(){});
            });
        }
    }
})();
