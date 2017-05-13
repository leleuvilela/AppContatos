angular.module('app.controllers')
    .controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.novaPessoa=
            {
                nome: '',
                cpf: '',
                contato: [
                    {
                        num: '',
                        desc: ''
                    }
                ]
            };

        $scope.pessoas;

        $http.get("api/ler.php")
            .then(function(response) {
                $scope.pessoas =  response.data ;
                console.log($scope.pessoas)
            });



        $scope.ler = function() {
            $http.get("api/ler.php")
                .then(function(response) {
                    $scope.pessoas = response.data;
                });
        };

        $scope.salvar = function () {
            console.log($scope.novaPessoa);
            $http.post("api/gravar.php", $scope.novaPessoa)
                .then(function() {
                    $scope.ler();
                }).catch(function(data, status, headers, config) {
                $scope.status = status;
            });
        };

        $scope.addnum = function(){
            $scope.novaPessoa.contato.push({});
        };

        // console.log($scope.pessoas);

    }]);