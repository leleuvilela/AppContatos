<?php

require_once "classes/Pessoa.php";

header('Content-Type: text/html; charset=utf-8');

$data = json_decode(file_get_contents("php://input"));


$contatoArray = [];

foreach ($data->contato as $cont) {
    array_push($contatoArray, new Contato($cont->num, $cont->desc));
}

$pessoa = new Pessoa();

$pessoa->nome = $data->nome;
$pessoa->cpf = $data->cpf;
$pessoa->contato = $contatoArray;

$gravar = $pessoa->toJson();


$arquivo = file_get_contents('../contatos.txt');

if(strlen($arquivo)>1){
    $tamanho = strlen($arquivo);
    $arquivo = substr($arquivo,1,$tamanho - 2);

    $arquivo = "[" . $arquivo . ", " . $gravar . "]";
print_r($arquivo);
}else{
    $arquivo = "[".$gravar."]";
}

file_put_contents('../contatos.txt', $arquivo);
