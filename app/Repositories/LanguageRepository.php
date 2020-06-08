<?php

namespace App\Repositories;

use App\Models\Language;

class LanguageRepository extends AbstractRepository {

    public function __construct(Language $model)
    {
        $this->model = $model;
    }

}