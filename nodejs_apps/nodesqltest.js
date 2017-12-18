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

const folder = './Speaker Bio/';
// var docx2html = require('docx2html')
var speaker_files = []
var mammoth = require("mammoth");

//decompress docx
const decompress = require('decompress');
var pcount = 0
var parseDocx = function (filename,zname, callback) {
    let r = pcount++
    let zipfolder = folder + "zip/" + zname +"/"
    if (!fs.existsSync(zipfolder)) {
        fs.mkdirSync(zipfolder);
    }
    decompress(filename, zipfolder).then(files => {
        fs = require('fs')
        try {

            fs.readFile(zipfolder + '/word/document.xml', 'utf8', function (err, data) {

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

//get speaker bios
var getSpeakerContent = (function (name) {
    fs.readdir(folder, (err, files) => {
        speaker_files = files
        // var filename = speaker_files.find(o => o.toLowerCase().indexOf(name.toLowerCase()) != -1)
        var filename = name+".docx"

        if (filename) {
            console.log("Opening: " + "./Speaker Bio/" + filename)
            try {
                // let lname = name
                parseDocx("./Speaker Bio/" + filename,name, function (data) {
                    // console.log(name,data)
                    // console.log(doc.getBody())
                    if (data.indexOf("Program book ver.")!=-1){
                        let longtext = data.split("Program book ver.")[0].trim().replace(/\n/g, "<br>")
                        let shorttext = data.split("Program book ver.")[1].trim().replace(/\n/g, "<br>")
                        connection.query('UPDATE `speakers` SET ? where name = ?', [{ bio: longtext, programbook_bio: shorttext}, name], function (error) {
                            if (error) {
                                console.log('寫入資料失敗！');
                                throw error;
                            }
                        });
                    }else{
                        connection.query('UPDATE `speakers` SET ? where name = ?', [{ bio: data.trim().replace(/\n/g, "<br>") }, name], function (error) {
                            if (error) {
                                console.log('寫入資料失敗！');
                                throw error;
                            }
                        });
                    }
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
            } catch (err) {

            }
        }
    })
})

//Transform speaker datas into infos for saving
var transformSpeaker = (obj) => ({
    name: obj.name,
    company: obj.company,
    position: obj.position,
    phone: obj.phone,
    year: obj.year,
    q_3word: obj.q_3word,
    q_job: obj.q_job,
    q_suggestion: obj.q_suggestion,
    headshot: "/img/Speaker Pictures/" + obj.name + ".jpg",
})

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


var csv = require("fast-csv");

csv
    .fromPath('n3xt_speaker_20171219/speaker list-表格 1.csv', { headers: true, ignoreEmpty: true})
    .on("data", function (data) {
        let tdata = transformSpeaker(data)
        console.log(tdata.name);

        connection.query('INSERT INTO `speakers` SET ?', tdata, function (error) {
            if (error) {
                console.log('寫入資料失敗！');
                throw error;
            }
        });
        getSpeakerContent(tdata.name)
    })
    .on("end", function () {
        console.log("done");
    });
return


// var WordExtractor = require("word-extractor");
// var extractor = new WordExtractor();
// var extracted = extractor.extract("file.doc");
// extracted.then(function (doc) {
//     console.log(doc.getBody());
// });

// speakerdata.forEach(obj=>{
//     getSpeakerContent(obj.name)
// })
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