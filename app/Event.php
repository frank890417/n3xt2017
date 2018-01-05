<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
    protected $fillable = [
        'title','cover', 'subtitle','routename', 'tag', 'description', 'ticketlink',
        'start_datetime','end_datetime','venue','address','speaker','album','agencies','type'
    ];

    // public function speaker()
    // {
    //     return $this->hasMany('App\Speaker');
    // }

    public function program()
    {
        return $this->hasMany('App\Program');
    }

    public function ticket()
    {
        return $this->hasMany('App\Ticket');
    }

    public function agency()
    {
        return $this->hasMany('App\Agency');
    }


}
