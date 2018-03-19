<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscribe extends Model
{
    //
    protected $fillable = [
        'name', 'email' ,'active','created_at','updated_at'
    ];
}
