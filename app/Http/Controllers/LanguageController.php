<?php

namespace App\Http\Controllers;

use App\Repositories\LanguageRepository;
use App\Utils\HttpUtils;
use Illuminate\Http\Request;

class LanguageController extends Controller
{

    public $repository;

    public function __construct(LanguageRepository $repository)
    {
        $this->repository = $repository;
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return HttpUtils::sendSuccessResponse('',$this->repository->findAll());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param LanguageRepository $repository
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $language = $this->repository->create($data);
        return HttpUtils::sendSuccessResponse('resource created',$language);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return HttpUtils::sendSuccessResponse('',$this->repository->find($id));
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        return HttpUtils::sendSuccessResponse('',$this->repository->delete($id));
    }
}
