<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    //
    protected $fillable = [
        'title', 'description','event_id', 'speakers',
        'start_datetime','end_datetime',
        'track',
        'created_at','updated_at',
        'is_common_track'
    ];
}
