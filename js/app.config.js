app.provider('appConfig', [function(){
    var config = {
        baseUrl: 'http://localhost:8000/',
        project: {
            status: [
                {value: 1, label: 'Não Iniciado'},
                {value: 2, label: 'Iniciado'},
                {value: 3, label: 'Concluído'}
            ]
        }
    };

    return {
        config: config,
        $get: function(){
            return config;
        }
    }
}]);