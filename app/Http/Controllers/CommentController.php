<?php

namespace App\Http\Controllers;

use App\Repositories\CommentRepository;
use App\Utils\HttpUtils;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public $repository;

    public function __construct(CommentRepository $repository)
    {
        $this->repository = $repository;
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return HttpUtils::sendSuccessResponse('',$this->repository->findAll());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $this->repository->create($data);
        return HttpUtils::sendSuccessResponse('resource created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        return HttpUtils::sendSuccessResponse('',$this->repository->find($id));
    }



    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        return HttpUtils::sendSuccessResponse('',$this->repository->edit($id,$data));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        return HttpUtils::sendSuccessResponse('',$this->repository->delete($id));
    }
}
