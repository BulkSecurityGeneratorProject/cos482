(function() {
    'use strict';

    angular
        .module('cos482App')
        .controller('CadastrarProfessorController', CadastrarProfessorController);

    CadastrarProfessorController.$inject = ['$window', '$scope', '$state', '$translate', 'entity', 'Professor'];

    function CadastrarProfessorController ($window, $scope, $state, $translate, entity, Professor) {
        var vm = this;

        vm.professor = entity;
        vm.clear = clear;
        vm.save = save;

        function clear() {
            $window.document.getElementById('cadastrar-professor-name').value = "";
            $window.document.getElementById('cadastrar-professor-siape').value = "";
        }

        function save() {
            vm.isSaving = true;
            Professor.save(vm.professor, onSaveSuccess, onSaveError);
        }

        function onSaveSuccess (result) {
            vm.isSaving = false;
            $window.alert($translate.instant('cadastrar-professor.alert.success'));
            vm.clear();
        }

        function onSaveError () {
            $window.alert($translate.instant('cadastrar-professor.alert.failure'));
            vm.isSaving = false;
        }
    }
})();
