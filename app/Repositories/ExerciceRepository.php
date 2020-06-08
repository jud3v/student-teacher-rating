<?php


namespace App\Repositories;


use App\Models\Exercise;

class ExerciceRepository extends AbstractRepository
{

    public function __construct(Exercise $model)
    {
        $this->model = $model;
    }

}