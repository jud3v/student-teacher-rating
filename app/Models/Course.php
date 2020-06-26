<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
      'meeting_date',
      'is_done',
      'teacher_id',
      'student_id',
       'waiting_for_approval',
    ];

    protected $dates = ['created_at','updated_at'];

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }

    public function student()
    {
        return $this->belongsTo(User::class);
    }
}
