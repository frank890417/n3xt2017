<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Media;
class MediaController extends Controller
{
    //
    public function index(){
        return Media::orderBy('id','desc')->get();
    }
    public function show($id){
        $result = Media::where("id",$id)
                    ->first();
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $media = Media::find($id);
        $media->update($inputs);
        $result =  $media;

        return $result;
    }
    public function destroy($id){
        $media = Media::find($id);
        $media->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        $media = Media::create($inputs);
        
        $media = Media::find($media->id);
        return $media;
    }
}
