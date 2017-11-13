<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
    //
    protected $fillable = [
        'name', 'company', 'position','description', 'email', 'bio', 'headshot', 'qa'
    ];
}
