angular.module('app.controllers')
    .controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.novocontato=
            {
                telefones: [
                    {
                        num: '',
                        desc: ''
                    }
                ]
            };

        $scope.contatos;

        $http.get("api/ler.php")
            .then(function(response) {
                $scope.contatos =  response.data ;
                console.log($scope.contatos)
            });



        $scope.ler = function() {
            $http.get("api/ler.php")
                .then(function(response) {
                    $scope.contatos = response.data;
                });
        };

        $scope.salvar = function () {
            console.log($scope.novocontato);
            $http.post("api/gravar.php", $scope.novocontato)
                .then(function() {
                    $scope.ler();
                }).catch(function(data, status, headers, config) {
                $scope.status = status;
            });
        };

        $scope.addnum = function(){
            $scope.novocontato.telefones.push({});
        };

        // console.log($scope.contatos);

    }]);