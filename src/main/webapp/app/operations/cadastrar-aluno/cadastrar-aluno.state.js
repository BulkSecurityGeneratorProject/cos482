(function() {
    'use strict';

    angular
        .module('cos482App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('cadastrar-aluno', {
            parent: 'operations',
            url: '/cadastrar-aluno',
            data: {
                authorities: ['ROLE_SECRETARIO_ACADEMICO'],
                pageTitle: 'global.menu.operations.cadastrar_aluno'
            },
            views: {
                'content@': {
                    templateUrl: 'app/operations/cadastrar-aluno/cadastrar-aluno.html',
                    controller: 'CadastrarAlunoController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('cadastrar-aluno');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }],
                aluno_doutorado_entity: function () {
                    return {
                        id: null,
                        ataDissertacaoId: null,
                        certidaoConclusaoId: null,
                        diplomaMestradoId: null,
                        alunoId: null
                    };
                },
                aluno_mestrado_entity: function () {
                    return {
                        id: null,
                        certidaoConclusaoId: null,
                        diplomaGraduacaoId: null,
                        certidaoColacaoId: null,
                        alunoId: null
                    };
                },
                aluno_entity: function () {
                    return {
                        id: null,
                        dre: null,
                        matricula: 0,
                        declaracaoConclusaoId: null,
                        historicoGraduacaoId: null,
                        usuarioId: null
                    };
                },
                usuario_entity: function () {
                    return {
                        id: null,
                        nome: null,
                        conta: 0,
                        cpfId: null,
                        rgId: null,
                        tituloDeEleitorId: null,
                        passaporteId: null,
                        systemUserId: null
                    };
                },
                user_entity: function () {
                    return {
                        id: null,
                        login: null,
                        passwordHash: null,
                        firstName: null,
                        lastName: null,
                        email: null
                    };
                },
                cpf_entity: function () {
                    return {
                        id: null,
                        tipo: "CPF",
                        valor: null
                    };
                },
                rg_entity: function () {
                    return {
                        id: null,
                        tipo: "RG",
                        valor: null
                    };
                },
                titulo_entity: function () {
                    return {
                        id: null,
                        tipo: "TITULO",
                        valor: null
                    };
                },
                dispensa_entity: function () {
                    return {
                        id: null,
                        tipo: "DISPENSA",
                        valor: null
                    };
                },
                passaporte_entity: function () {
                    return {
                        id: null,
                        tipo: "PASSAPORTE",
                        valor: null
                    };
                },
                declaracao_conclusao_entity: function () {
                    return {
                        id: null,
                        tipo: "DECLARAÇÃO CONCLUSÃO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                historico_graduacao_entity: function () {
                    return {
                        id: null,
                        tipo: "HISTORICO GRADUAÇÃO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                diploma_graduacao_entity: function () {
                    return {
                        id: null,
                        tipo: "DIPLOMA GRADUAÇÃO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                certidao_conclusao_entity: function () {
                    return {
                        id: null,
                        tipo: "CERTIDÃO DE CONCLUSÃO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                certidao_colacao_entity: function () {
                    return {
                        id: null,
                        tipo: "CERTIDÃO DE COLAÇÃO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                ata_dissertacao_entity: function () {
                    return {
                        id: null,
                        tipo: "ATA DISSERTAÇÃO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                certidao_mestrado_entity: function () {
                    return {
                        id: null,
                        tipo: "CERTIDÃO MESTRADO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                diplima_mestrado_entity: function () {
                    return {
                        id: null,
                        tipo: "DIPLOMA MESTRADO",
                        formato: "PDF",
                        timestamp_envio: null,
                        status: 0,
                        escopo: null,
                        caminho: null
                    };
                },
                log_entity: function () {
                    return {
                        id: null,
                        timestampFuncao: null,
                        funcao: 0,
                        username: null
                    };
                }
            }
        });
    }
})();
