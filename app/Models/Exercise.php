<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    protected $fillable = [
        'content',
        'limit_date',
        'is_done',
        'rating',
        'student_id',
        'teacher_id',
    ];

    protected $dates = ['created_at','updated_at'];

    public function student()
    {
        return $this->belongsTo(User::class);
    }

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }
}
