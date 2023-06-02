<?php
if($_GET['id']) {
//MYDRAMALIST DRAMA API ===========================================================
function mdlapi($mdlId){
    $url = "https://api.mydramalist.com/v1/titles/{$mdlId}";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'mdl-api-key: 6e820ce645f4988dc5ec802984bba446dc1668c7'
    ]);
    $result = curl_exec($ch);        
    curl_close($ch);
    return json_decode($result,true);
}
print_r(json_encode(mdlapi($_GET['id'])));


} else {
}
?>
