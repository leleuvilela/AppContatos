<?php

class Contato
{
    public $num;
    public $desc;

    function __construct($num, $desc){
        $this->num = $num;
        $this->desc = $desc;
    }
}