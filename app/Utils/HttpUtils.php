<?php


namespace App\Utils;


class HttpUtils
{
    public static function sendJsonResponse($success, $data = null, string $message = null)
    {
        return response()->json([
            'success' => $success,
            'data' => $data,
            'message' => $message,
        ]);
    }

    public static function sendSuccessResponse(string $message = null, $data = null)
    {
        return self::sendJsonResponse(true, $data, $message);
    }

    public static function sendErrorResponse(string $message = null, $data = null)
    {
        return self::sendJsonResponse(false, $data, $message);
    }
}