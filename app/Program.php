<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    //
    protected $fillable = [
        'title', 'description','event_id', 'start_datetime','end_datetime','created_at','updated_at'
    ];
}
