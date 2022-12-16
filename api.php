<?php

$cds_string = file_get_contents('dischi.json');

$cds = json_decode($cds_string, true);
// manipolazione del json decodificato(sorgente: dischi.json) in php
$cds[] = [
   'title' =>  'Giulio Cesare',
   'author' =>  'cyber punk',
   'year' =>  2099,
   'poster' =>  'https://picsum.photos/200/300',
   'genre' =>  'pop',
];

header('Content-Type: application/json');
echo json_encode($cds);
