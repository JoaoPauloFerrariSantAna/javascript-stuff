<?php

/* NOTE: this code is not suitable for prod.
 * it's a test */

$formated_name = strtoupper($_GET["name"]);
$formated_age = intval($_GET["age"]) + 1;

$data = array( "username" => $formated_name, "age" => $formated_age );
$json_data = json_encode($data);

echo $json_data;


?>