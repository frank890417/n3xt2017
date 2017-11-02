<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;
use App\Event;
class EventController extends Controller
{
    //
    public function index(){
        return Event::all();
    }
    public function show($id){
        $result = Event::find($id)
                    ->with('ticket')
                    ->with('speaker')
                    ->with('program')
                    ->get();
        return $result[0];
    }
    public function update($id){
        $inputs = Input::all();
        $event = Event::find($id);
        $event->update($inputs);
        return $event;
    }
    public function destroy($id){
        $event = Event::find($id);
        $event->delete();
        return ["status"=>"success"];
    }
    public function create(){
        $inputs = Input::all();
        $event = Event::create($inputs);
        return $event;
    }
}
