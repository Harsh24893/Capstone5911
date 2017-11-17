<?php

$curl = curl_init();


$ClientData = file_get_contents('php://input');
$pieces = explode("&", $ClientData);
//$userId = explode("=", $pieces[0])[1];
//$source = explode("=", $pieces[1])[1];
//$meal = explode("=", $pieces[2])[1];
//$flight = explode("=", $pieces[3])[1];
$userId = "457016283";
$source = "KVNY";
$meal = "Lunch";
$flight = "Short";
if ( $meal == 'Late+Night') {
	$meal = 'Late Night';
};
//echo "$userId\n";
//echo "$source\n";
//echo "$meal\n";
//echo "$flight\n";
$user = $userId."-".$source."-".$meal."-".$flight;
//$user = '100020383KABELate NightShort';
//echo "$user\n";
//echo "$parent_sku\n";
//echo "$rating\n";

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://ussouthcentral.services.azureml.net/workspaces/150de299226b41698270c2ddfbc6794b/services/ed53f8065038469c9366cf3d66e217c6/execute?api-version=2.0&format=swagger",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\r\n\r\n        \"Inputs\": {\r\n\r\n                \"input2\":\r\n\r\n                [\r\n\r\n                    {\r\n\r\n                            'USER': \"$user\",   \r\n\r\n                    }\r\n\r\n                ],\r\n\r\n        },\r\n\r\n    \"GlobalParameters\":  {\r\n\r\n    }\r\n\r\n}\r\n\r\n",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer LXhgEcS8WvukPrwONwU2bN0LGBWUvcrQUJqdpBksAkD/XebYFuGeZHLQPgo9UWv1l5D8ekC4M6CHqUqubuScXg==",
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: 1b8850c7-0a52-5fba-d8aa-8158225512bc"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  //$response = explode("[", $response)[1];
  //$response = explode("]", $response)[0];
  $count = strlen($response);
  //echo $count;
  $count1 = 3;
  $count = $count - 11 - 1;
  //echo "$count\n";
	$response = substr($response, 11, $count); // f
	echo "$response\n";
   //echo str_replace('/"', '/'', $response);
  //echo $response;
  //echo $response;
  //36983697
}
?>