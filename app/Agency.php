<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    //
    protected $fillable = [
        'name', 'link', 'logo','created_at','updated_at'
    ];
}
