// // var json = require('json-file')
// var file = './Speaker List.csv'
// // jsonfile.readFile(file, function (err, obj) {
// //   console.dir(err)
// // })

var fs = require("fs")
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var each = require('async/each');
// var parse = require('csv-parse');
// var parser = parse({ delimiter: ',' }, function (err, data) {
//     // console.log(data);
// });

// fs.createReadStream(file).pipe(parser);

// var csv = require('node-csv')
// lines = 0;
// csv.each('Speaker List.csv').on('data', function (data) {
//     lines++;
//     console.log(data)
// }).on('end', function () {
//     console.log(lines + ' lines parsed');
// })

var speakerdata = [
    {
        "name": "Lewis Liu",
        "company": "Faraday Future",
        "position": "Head of Strategic Partnership & Business Development"
    },
    {
        "name": "Chris Cowen",
        "company": "Herzog and Company",
        "position": "EVP"
    },
    {
        "name": "Drew Minock",
        "company": "DAQRI",
        "position": "Outreach Manager"
    },
    {
        "name": "Daniel Seah",
        "company": "Digital Domain",
        "position": "CEO"
    },
    {
        "name": "Vijay Karunamurthy",
        "company": "nom",
        "position": "Co-Founder & CEO"
    },
    {
        "name": "Abe Forman-Greenwald",
        "company": "BuzzFeed Motion Pictures",
        "position": "Producer & Director"
    },
    {
        "name": "Bill Badalato",
        "company": "Producer",
        "position": "Producer"
    },
    {
        "name": "Eric Ashenberg",
        "company": "Esq.",
        "position": "Ashenberg Law Group"
    },
    {
        "name": "Edwin Wong",
        "company": "BuzzFeed",
        "position": "VP of Research & Insights"
    },
    {
        "name": "Natascha French",
        "company": "VNTANA",
        "position": "CMO"
    },
    {
        "name": "Michael Cruz",
        "company": "Skybound Entertainment",
        "position": "Director of Digital Programming"
    },
    {
        "name": "Nancy Wang",
        "company": "CTVentures",
        "position": "Director"
    },
    {
        "name": "Nanxi Liu",
        "company": "Enplug",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Jessica Blotter",
        "company": "Kind Traveler",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Clarissa Pinto Ribeiro",
        "company": "Crescent Solutions",
        "position": "Tech Recruiter"
    },
    {
        "name": "Alfred Fung",
        "company": "fun-gi.com",
        "position": "Founder & CEO"
    },
    {
        "name": "Sonya Lee",
        "company": "Dude I Need A Truck",
        "position": "Co-founder & CPO"
    },
    {
        "name": "Stephen Chen",
        "company": "Petnostics",
        "position": "Founder & CEO"
    },
    {
        "name": "Ian Chen",
        "company": "Discotech",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Alex Lin",
        "company": "Hush",
        "position": "Founder & CEO"
    },
    {
        "name": "Kina De Santis",
        "company": "WeGreenlight",
        "position": "Director of Business Development"
    },
    {
        "name": "William Wang",
        "company": "Vizio",
        "position": "Founder & CEO"
    },
    {
        "name": "William Hsu",
        "company": "Mucker Capital",
        "position": "Co-founder & Managing Partner"
    },
    {
        "name": "Ted Ross",
        "company": "City of Los Angeles",
        "position": "CIO"
    },
    {
        "name": "Doane Liu",
        "company": "Port of Los Angeles",
        "position": "Deputy Executive Director"
    },
    {
        "name": "Biren Gandhi",
        "company": "Cisco Systems",
        "position": "Distinguished Strategist"
    },
    {
        "name": "Ajay Mungara",
        "company": "Intel",
        "position": "Senior Product Manager"
    },
    {
        "name": "Chun-Chen (Albert) Liu",
        "company": "Kneron",
        "position": "Founder & CEO"
    },
    {
        "name": "Dylan Southard",
        "company": "VRPLAYHOUSE",
        "position": "Creative Director"
    },
    {
        "name": "Robin Ardeshir",
        "company": "Plug and Play - LA",
        "position": "Managing Director"
    },
    {
        "name": "Joel Ogden",
        "company": "ConstructStudio",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Rachel Skidmore",
        "company": "Skybound Entertainment",
        "position": "Director of Media Development"
    },
    {
        "name": "John Canning",
        "company": "VP New Media",
        "position": "Producers Guild of America"
    },
    {
        "name": "Harrison Tang",
        "company": "Spokeo",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Nick Desai",
        "company": "Heal",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Henry Shu",
        "company": "SpeedyAI",
        "position": "Founder & CEO"
    },
    {
        "name": "Yu-Feng Wei",
        "company": "Vizuro",
        "position": "Co-founder & CEO"
    },
    {
        "name": "Anuj Bhalla",
        "company": "serviceMob, Inc.",
        "position": "Founder & CEO"
    },
    {
        "name": "Alyse Killeen",
        "company": "Managing Partner",
        "position": "StillMark Co."
    },
    {
        "name": "Jeffrey Chu",
        "company": "WI Harper Group",
        "position": "Partner"
    },
    {
        "name": "Brian Mac Mahon",
        "company": "Expert DOJO",
        "position": "Founder & CEO"
    },
    {
        "name": "Nancy Wang",
        "company": "CTVentures",
        "position": "Director"
    },
    {
        "name": "Mike Prasad",
        "company": "Managing Director & Founding Partner",
        "position": "ventureLab"
    }
]


// Likewise, this... 
// var data = fs.readFile(file, "utf8",function(err,data){
  // console.log(data)
//   var jsondata = JSON.parse(data)
//   console.log(jsondata)



//載入MySQL模組
var mysql = require('mysql');
//建立連線
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '@##434frt))',
    database: 'n3xt2017'
});
//開始連接
connection.connect();

//   jsondata
//     .map(obj=>({
//       name: obj.name,
//       company: obj.content,
//       cover: "http://dschool.ntu.edu.tw"+obj.img,
//       cata: obj.index_in,
//       date: obj.date,
//       link: obj.link,
//       show: obj.release_in,
//       description: obj.list_content,
//       created_at: obj.created_time,
//       updated_at: obj.updated_time,

//     }))

const folder = './Speaker Bio/';
// var docx2html = require('docx2html')
var speaker_files = []
var mammoth = require("mammoth");


speakerdata.map(obj => ({
    name: obj.name,
    company: obj.company,
    position: obj.position,
    headshot: "/img/Speaker Pictures/" + obj.name+".jpg",
})).forEach(d => {
    connection.query('INSERT INTO `speakers` SET ?', d, function (error) {
        if (error) {
            console.log('寫入資料失敗！');
            throw error;
        }
    });
})

// var WordExtractor = require("word-extractor");
// var extractor = new WordExtractor();
// var extracted = extractor.extract("file.doc");
// extracted.then(function (doc) {
//     console.log(doc.getBody());
// });
const decompress = require('decompress');
var pcount = 0
var parseDocx = function (filename, callback) {
    let r = pcount++
    let zipfolder = folder+"/zip/"
    decompress(filename, zipfolder).then(files => {
        fs = require('fs')
        try {

            fs.readFile( zipfolder + '/word/document.xml', 'utf8', function (err, data) {

                if (err) {
                    return console.log(err);
                } else {

                    var plain_text = data.replace(/(<w:p )[\s\S]*?>/g, "\n<w:p").replace(/(<([^>]+)>)/ig, "").trim();
                    callback(plain_text);
                }

            });
        } catch (error) {

        }

    });
}



var getSpeakerContent =  (function (name){
    fs.readdir(folder, (err, files) => {
        speaker_files = files
        var filename = speaker_files.find(o => o.indexOf(name) != -1)

        if (filename){
            console.log("Opening: " + "./Speaker Bio/" + filename)
            try{
                // let lname = name
                parseDocx("./Speaker Bio/" + filename, function (data) {
                    // console.log(name,data)
                    // console.log(doc.getBody())
                    connection.query('UPDATE `speakers` SET ? where name = ?', [{ bio: data }, name], function (error) {
                        if (error) {
                            console.log('寫入資料失敗！');
                            throw error;
                        }
                    });
                })

                // extractor.extract("./Speaker Bio/" + filename).then(function (doc) {
                    
                // });
                // mammoth.convertToHtml({ path: "./Speaker Bio/" + filename })
                // .then(function (result) {
                //     var html = result.value; // The generated HTML
                //     var messages = result.messages; // Any messages, such as warnings during conversion
                    
                //     console.log(html)
                //     connection.query('UPDATE `speakers` SET bio=? where name=?', [html,name], function (error) {
                //         if (error) {
                //             console.log('寫入資料失敗！');
                //             throw error;
                //         }
                //     });
                // })
                // .done();
            }catch (err){

            }
        }
    })
})

speakerdata.forEach(obj=>{
    getSpeakerContent(obj.name)
})
// each(speakerdata,async(function(speaker){
//     console.log(speaker)
//     var test = await( getSpeakerContent(speaker.name))
//     console.log(test)
// }), function (err) {
    
//     // if any of the saves produced an error, err would equal that error
// });
// speakerdata.forEach(obj=>{
//     var test = getSpeakerContent(obj.name)
//     console.log(test)
// })
// connection.end();

// });