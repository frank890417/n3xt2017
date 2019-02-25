<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $table = 'medias';
    //
    protected $fillable = [
        'id','created_at','updated_at','title','content','url'
    ];
}
