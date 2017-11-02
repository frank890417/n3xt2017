<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Program;
class ProgramController extends Controller
{
    //
    public function index(){
        return Program::all();
    }
    public function show($id){
        $result = Program::where("id",$id)
                    ->first();
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $program = Program::find($id);
        $program->update($inputs);
        $result =  $program;

        return $result;
    }
    public function destroy($id){
        $program = Program::find($id);
        $program->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        $program = Program::create($inputs);
        return $program;
    }
}
