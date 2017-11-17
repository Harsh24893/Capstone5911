<?php

$curl = curl_init();


$ClientData = file_get_contents('php://input');
$pieces = explode("&", $ClientData);
$userId = explode("=", $pieces[0])[1];
$source = explode("=", $pieces[1])[1];
$meal = explode("=", $pieces[2])[1];
$intMeal = (int)$meal;

if($intMeal > 20) {
	$meal = 'Late Night';
	//echo "$meal\n";
}
//echo "<script type='text/javascript'>alert('$meal');</script>";
$flight = explode("=", $pieces[3])[1];
if ( $meal == "Late+Night") {
	$meal = 'Late Night';
};
//echo "$userId\n";
//echo "$source\n";
//echo "$meal\n";
//echo "$flight\n";
//echo $meal;
$user = $userId.$source.$meal.$flight;
//$user = '100020383KABELate NightShort';
//echo "$user\n";
//echo "$parent_sku\n";
//echo "$rating\n";

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://ussouthcentral.services.azureml.net/workspaces/150de299226b41698270c2ddfbc6794b/services/d2c8b09c29bb42a2819cdc6164c2960f/execute?api-version=2.0&format=swagger",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\r\n        \"Inputs\": {\r\n                \"input1\":\r\n                [\r\n                    {\r\n                            'user': \"$user\",   \r\n                    }\r\n                ],\r\n        },\r\n    \"GlobalParameters\":  {\r\n    }\r\n}\r\n\r\n\r\n",
  CURLOPT_HTTPHEADER => array(
     "authorization: Bearer 1OsT1beqkufG0y5HK7BMhoOThJSKf9ABGjzfUD/C8/5CmRceSZRQmZ7W4Mrm9tQViOkj79zyLuczQ3q3d4rXPw==",
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: 995d15a4-f566-c8db-0c86-3e439d4c43b4"
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