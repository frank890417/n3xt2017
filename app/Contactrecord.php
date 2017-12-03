<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contactrecord extends Model
{
    //
    protected $fillable = [
        'name', 'email','message','created_at','updated_at'
    ];
}
