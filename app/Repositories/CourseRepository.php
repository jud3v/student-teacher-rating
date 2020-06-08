<?php


namespace App\Repositories;


use App\Models\Course;

class CourseRepository extends AbstractRepository
{

    public function __construct(Course $model)
    {
        $this->model = $model;
    }

}