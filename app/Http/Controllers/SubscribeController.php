<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscribe;
use Illuminate\Support\Facades\Input;
class SubscribeController extends Controller
{
    //
    public function index(){
        return Subscribe::all();
    }
    public function show($id){
        $result = Subscribe::where("id",$id)
                    ->first();
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $subscribe = Subscribe::find($id);
        $subscribe->update($inputs);
        $result =  $subscribe;

        return $result;
    }
    public function destroy($id){
        $subscribe = Subscribe::find($id);
        $subscribe->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        $subscribe = Subscribe::create($inputs);
        return $subscribe;
    }
}
