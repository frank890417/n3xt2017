<?php

use Illuminate\Database\Seeder;

use App\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::truncate();
        //
        Post::create([
            "title" => "How to start your day with positivity, maintain it and overcome obstacles in your life!",
            "author" => 1,
            "cover" => "https://www.n3xtcon.com/uploads/5/5/0/1/55010343/283489311.png",
            "content" => "I was taking a walk near my place in DTLA this afternoon. Talking on the phone with my friend Shawn, I start ranting non-stop. Gotta really appreciate that I have a friend that always inspires me to talk, express myself and be a good listener for me. As my mind getting into a flow state, I really had some epiphanies that I would like to share. Before I start writing, I just want to give a big shoutout to Ryan Holiday, the author of two great books “Ego is the enemy” and “Obstacle is the way”. Definite should check it out if you haven’t read them.",
        ]);
        Post::create([
            "title" => "The cabin, the wheel and the Rockstar mentality    ft. Ann Silberman",
            "author" => 1,
            "cover" => "https://www.n3xtcon.com/uploads/5/5/0/1/55010343/cabinbig-1-of-1_orig.jpeg",
            "content" => "I met Ann at a rooftop music event hosted by her. My first impression of her was her energy. She was very energetic and welcoming. We were both very talkative people so we bonded in like 5 minutes. I asked her about the meaning of the name for Little Cabin Entertainment and introduced to her what N3XTCON is about, which led to this interview with her in the following week.<br><br>Little Cabin and N3XTCON are similar in that we are both focusing on using our resources to help young professionals with developing their careers,  and providing support to the community.<br><br>The name Little Cabin really got me intrigued when I first heard it. It reminded me of “The Cabin” by Ylvis, very good song by the way. I have a feeling as to the meaning behind it, but hearing it from someone that actually spent 7 years building it and started a company with the concept behind it, it’s just very refreshing and inspiring.",
        ]);
        Post::create([
            "title" => "What do we learn from the story of Airbnb?",
            "author" => 1,
            "cover" => "https://www.n3xtcon.com/uploads/5/5/0/1/55010343/aaeaaqaaaaaaaafpaaaajdq4ztizytjkltcyztktndyyms05ogvkltgznwzjzjbhndjmoq_orig.png",
            "content" => "It is so weird for someone accommodating strangers in your own house at least it is opposite with what we were taught that the strangers are usually dangerous. The guy you never met before will sleep on your bed, stay in your room for couple of days, and use all of your facilities in your place. However, Joe Gebbia, the CPO of Airbnb, successfully created a brand-new business model in the existed dormitory market.<br><br>What are the keys leading Airbnb such a successful business in the world? Personally, I believe there are 3 main reasons that Joe and his partners, Brian Chesky and Nathan Blecharczyk, have been holding all the time while building up Airbnb. ",
        ]);
        
    }
}
