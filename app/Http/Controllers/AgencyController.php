<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Agency;
class AgencyController extends Controller
{
    //
    public function index(){
        return Agency::all();
    }
    public function show($id){
        $result = Agency::where("id",$id)
                    ->first();
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $agency = Agency::find($id);
        $agency->update($inputs);
        $result =  $agency;

        return $result;
    }
    public function destroy($id){
        $agency = Agency::find($id);
        $agency->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        $agency = Agency::create($inputs);
        
        // $agency = Agency::find($agency->id);
        return $agency;
    }
}