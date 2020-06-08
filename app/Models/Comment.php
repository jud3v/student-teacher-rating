<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'comment',
        'course_id',
        'exercise_id',
        'user_id',
    ];

    protected $dates = ['created_at','updated_at'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function exercise()
    {
        return $this->belongsTo(Exercise::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
