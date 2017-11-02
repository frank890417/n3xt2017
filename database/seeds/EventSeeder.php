<?php

use Illuminate\Database\Seeder;
use App\Event;
use App\Ticket;
use App\Program;
class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Event::truncate();
        $event = Event::create([
            "type" => "workshop",
            "title" => "Entertainment One to Infinity: A Personal Reflection on Success",
            "subtitle" => "",
            "tag" => "[\"test\",\"good\"]",
            "description" => "Join David Li and his three guests for a candid and intimate discussion of business, creative process and the idea of success in the entertainment space. If you are a creative or an entertainment business professional, this would be a great opportunity to get fresh perspective from three different backgrounds. Come, listen, get inspired and establish the network that may help you forge the path you have yet to discover.",
            "venue" => "Bergamot Station",
            "start_datetime" => "2017/10/14 13:00:00",
            "end_datetime" => "2017/10/14 16:00:00",
            "address" => "2525 Michigan Ave, T1, Santa Monica, CA 90404",
        ]);

        Ticket::truncate();
        Ticket::create([
            "event_id" => $event->id,
            "title" => "General",
            "type" => "General",
            "price" => 15,
            "note" => "",
            "link" => ""
        ]);
        Ticket::create([
            "event_id" => $event->id,
            "title" => "Cross-promotion",
            "type" => "Cross-promotion",
            "price" => 10,
            "note" => "",
            "link" => ""
        ]);

        Ticket::create([
            "event_id" => $event->id,
            "title" => "Partnership",
            "type" => "Partnership",
            "price" => 10,
            "note" => "",
            "link" => ""
        ]);

        Ticket::create([
            "event_id" => $event->id,
            "title" => "Student",
            "type" => "Student",
            "price" => 8,
            "note" => "",
            "link" => ""
        ]);

        Ticket::create([
            "event_id" => $event->id,
            "title" => "Late registration",
            "type" => "Late registration",
            "price" => 25,
            "note" => "",
            "link" => ""
        ]);

        Program::truncate();
        Program::create([
            "event_id" => $event->id,
            "title" => "Reception and pre-event networking",
            "description" => "",
            "start_datetime" => "2017/10/14 13:00:00",
            "end_datetime" => "2017/10/14 13:30:00",
        ]);
        Program::create([
            "event_id" => $event->id,
            "title" => "Interactive activities with speakers",
            "description" => "",
            "start_datetime" => "2017/10/14 13:30:00",
            "end_datetime" => "2017/10/14 13:40:00",
        ]);
        Program::create([
            "event_id" => $event->id,
            "title" => "Panel Talks",
            "description" => "",
            "start_datetime" => "2017/10/14 13:40:00",
            "end_datetime" => "2017/10/14 14:40:00",
        ]);
        Program::create([
            "event_id" => $event->id,
            "title" => "Q&A",
            "description" => "",
            "start_datetime" => "2017/10/14 14:40:00",
            "end_datetime" => "2017/10/14 15:00:00",
        ]);
        Program::create([
            "event_id" => $event->id,
            "title" => "Post Event Socializing",
            "description" => "",
            "start_datetime" => "2017/10/14 15:00:00",
            "end_datetime" => "2017/10/14 16:00:00",
        ]);

    }
}
