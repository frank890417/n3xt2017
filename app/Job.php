<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    //
    protected $fillable = [
        'name', 'cover','title','description','content','created_at','updated_at'
    ];

}
