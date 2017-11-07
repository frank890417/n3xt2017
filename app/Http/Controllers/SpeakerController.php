<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Speaker;
use Illuminate\Support\Facades\Input;
class SpeakerController extends Controller
{
    //
    public function index(){
        return Speaker::all();
    }
    public function show($id){
        $result = Speaker::where("id",$id)
                    ->first();
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $speaker = Speaker::find($id);
        $speaker->update($inputs);
        $result =  $speaker;

        return $result;
    }
    public function destroy($id){
        $speaker = Speaker::find($id);
        $speaker->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        $speaker = Speaker::create($inputs);
        return $speaker;
    }
}
