<?php

use Tymon\JWTAuth\Facades\JWTAuth;

if (!function_exists('jwtDecodeToken')){
    function jwtDecodeToken()
    {
        $token = JWTAuth::getToken();
        return JWTAuth::getPayload($token)->toArray();
    }
}
