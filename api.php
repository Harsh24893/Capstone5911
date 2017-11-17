<?php

$curl = curl_init();


$ClientData = file_get_contents('php://input');
$pieces = explode("&", $ClientData);
$user = explode("=", $pieces[0])[1];
$parent_sku = explode("=", $pieces[1])[1];
$rating = explode("=", $pieces[2])[1];
//echo "$user\n";
//echo "$parent_sku\n";
//echo "$rating\n";

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://ussouthcentral.services.azureml.net/workspaces/150de299226b41698270c2ddfbc6794b/services/8ddaaa9e1cbf4ca4b2c80a2e479a0a8e/execute?api-version=2.0&format=swagger",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\r\n        \"Inputs\": {\r\n                \"input1\":\r\n                [\r\n                    {\r\n                            'USER': \"$user\",   \r\n                            'PARENT_SKU': \"$parent_sku\",   \r\n                            'RATING': \"$rating\",   \r\n                    }\r\n                ],\r\n        },\r\n    \"GlobalParameters\":  {\r\n    }\r\n}\r\n\r\n",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer IwKo/fwtYQxSJsbVylWiMiFn5Fd3GcicRhabMYb2VLm5eQ7mwLn7uanfAYxhX/FP4y/1YGSof4eHx50ucqMj/w==",
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: f7903a97-4f78-24f6-0d1e-1d9948f32879"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $response = explode("[", $response)[1];
  $response = explode("]", $response)[0];
  echo $response;
}
?>