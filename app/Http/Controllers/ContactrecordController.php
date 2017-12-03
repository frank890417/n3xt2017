<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Contactrecord;
use Mail;

class ContactrecordController extends Controller
{
    //
    public function index(){
        return Contactrecord::all();
    }
    public function show($id){
        $result = Contactrecord::where("id",$id)
                    ->first();
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $contactrecord = Contactrecord::find($id);
        $contactrecord->update($inputs);
        $result =  $contactrecord;

        return $result;
    }
    public function destroy($id){
        $contactrecord = Contactrecord::find($id);
        $contactrecord->delete();
        return ["status"=>"success"];
    }

    public function store(){
        $inputs = Input::all();
        $contactrecord = Contactrecord::create($inputs);
        $send_data = [
            "id" => $contactrecord->id,
            "contactname" => $contactrecord->name,
            "email" => $contactrecord->email,
            "contactmessage" => $contactrecord->message
        ];
        // dd( $send_data);
        
        Mail::send('emails.contact',  [
            "id" => $contactrecord->id,
            "contactname" => $contactrecord->name,
            "email" => $contactrecord->email,
            "contactmessage" => $contactrecord->message
        ] , function($message) use ($send_data){
            $message
                ->subject('n3xtcon Contact Record #'.$send_data['id'].' from '.$send_data['contactname'])
                ->from('service@n3xtcon.com','n3xtcon')
                ->bcc('frank890417@gmail.com', '吳哲宇')
                ->to('info@n3xtcon.com','n3xtcon');
            //info@n3xtcon.com
        });

        $contactrecord = Contactrecord::find($contactrecord->id);
        return [
            "record" => $contactrecord,
            "status" => "success"
        ];
    }
}
