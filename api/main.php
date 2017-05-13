<?php

//SOMENTE PARA TESTES

require_once 'classes/Pessoa.php';

$recebido = '{"nome":"jo\u00e3o","cpf":12214,"contato":[{"num":"1234","desc":"ok"},{"num":"1234","desc":"ok"},{"num":"1234","desc":"ok"}]}';

$data = json_decode($recebido);


$contatoArray = [];

foreach ($data->contato as $cont) {
    array_push($contatoArray, new Contato($cont->num, $cont->desc));
}

$pessoa = new Pessoa();

$pessoa->nome = $data->nome;
$pessoa->cpf = $data->cpf;
$pessoa->contato = $contatoArray;

echo "<pre>";
print_r($pessoa);
echo "</pre>";

$gravar = json_encode($pessoa);

print_r($gravar);

//
//
//$contatoObj = new Contato("1234", "ok");
//
//$contatoArray = [$contatoObj, $contatoObj,$contatoObj];
//
//foreach ($cont as $data->contato) {
//    array_push($contatoArray, new Pessoa($cont));
//}
//
//$pessoa = new Pessoa();
//
//$pessoa->nome = "joão";
//$pessoa->cpf = 12214;
//$pessoa->contato = $contatoArray;
//
//print_r($pessoa->toJson());
//
//$pessoa2 = new Pessoa();

//

//
//$json = json_encode($pessoa);
//
//echo "<pre>";
//print_r(json_decode($json));
//echo "</pre>";