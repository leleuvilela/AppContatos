<?php

require_once 'Contato.php';

class Pessoa
{
    public $nome;
    public $cpf;
    public $contato;

//    function __construct($nome, $cpf, $contato){
//        $this->nome = $nome;
//        $this->cpf = $cpf;
//        $this->contato = $contato;
//    }

    function toJson(){
        return json_encode($this);
    }

}