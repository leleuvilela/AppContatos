<?php

header('Content-Type: text/html; charset=utf-8');

$data = file_get_contents("php://input");

$arquivo = file_get_contents('../contatos.txt');

if(strlen($arquivo)>1){
    $tamanho = strlen($arquivo);
    $arquivo = substr($arquivo,1,$tamanho - 2);

    $arquivo = "[" . $arquivo . ", " . $data . "]";
print_r($arquivo);
}else{
    $arquivo = "[".$data."]";
}

file_put_contents('../contatos.txt', $arquivo);
