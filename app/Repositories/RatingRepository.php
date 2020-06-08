<?php


namespace App\Repositories;


use App\Models\Rating;

class RatingRepository extends AbstractRepository
{

    public function __construct(Rating $model)
    {
        $this->model = $model;
    }

}