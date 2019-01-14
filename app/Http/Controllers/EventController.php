<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;
use App\Event;
use App\Program;
class EventController extends Controller
{
    //
    public function index(){
        return Event::orderBy("start_datetime","desc")->get();
    }
    public function show($id){
        $result = Event::where("id",$id)
                    ->with('ticket')
                    // ->with('speaker')
                    ->with('program')
                    ->first();
        return $result;
    }
    public function getEventByRoutename($routename){
        $result = Event::where("routename",$routename)
                    ->with('ticket')
                    // ->with('speaker')
                    ->with('program')
                    ->first();
        if ($result) {
            return $result;
        }
        $result = Event::where("title",str_replace("_"," ",strip_tags($routename)) )
                    ->with('ticket')
                    // ->with('speaker')
                    ->with('program')
                    ->first();
        if ($result) {
            return $result;
        }
        

    }
    public function update($id){
        $inputs = Input::all();
        $inputs['tag'] = json_encode($inputs['tag']);
        $inputs['speaker'] = json_encode($inputs['speaker']);
        $inputs['album'] = json_encode($inputs['album']);
        $inputs['agencies'] = json_encode($inputs['agencies']);
        // dd($inputs['otherinfo']);
        $inputs['otherinfo'] = json_encode($inputs['otherinfo']);

        $event = Event::find($id);
        $event->update($inputs);
        if ($inputs['program']){
            foreach ($inputs['program'] as $program){
                $p = Program::find($program['id']);
                $p->update($program);
            }
        }
        $result =  $event->with('ticket')
                    // ->with('speaker')
                    ->with('program')
                    ->first();

        return $result;
    }
    public function destroy($id){
        $event = Event::find($id);
        $event->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        if (array_key_exists('tag',$inputs)){
            $inputs['tag'] = json_encode($inputs['tag']);
        }
        if (array_key_exists('speaker',$inputs)){
            $inputs['speaker'] = json_encode($inputs['speaker']);
        }
        if (array_key_exists('album',$inputs)){
            $inputs['album'] = json_encode($inputs['album']);
        }
        if (array_key_exists('agencies',$inputs)){
            $inputs['agencies'] = json_encode($inputs['agencies']);
        }
        
        if (array_key_exists('otherinfo',$inputs)){
            $inputs['otherinfo'] = json_encode($inputs['otherinfo']);
        }
        $event = Event::create($inputs);
        return $event;
    }

    // public function getConference(){

    // }
}
