<?php


namespace App\Repositories;


use App\Models\Course;
use Illuminate\Support\Facades\DB;

class CourseRepository extends AbstractRepository
{

    public function __construct(Course $model)
    {
        $this->model = $model;
    }

    public function findCourses(int $id, bool $is_student, bool $waiting)
    {
        $verifyIfIsStudent = !$is_student ? 'student_id' : 'teacher_id';
        $column = $is_student ? 'student_id' : 'teacher_id';
        return DB::table('courses')
        ->join('users','users.id','=',"courses.$column")
        ->where("courses.$verifyIfIsStudent",'=', $id)
        ->where('waiting_for_approval','=',$waiting)
        ->select(['meeting_date','is_done',$column,'name'])
        ->get();
    }

}