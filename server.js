var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':  {
        title: 'Article One | Bi',
        heading: 'Article One',
        date: 'Aug 10, 2017',
        paracontent: `
            <p>
                Para 1
                These are the lines in article one These are the lines in article one These are the lines in article one
                These are the lines in article one These are the lines in article one These are the lines in article one
            </p>
            <p>
                Para 2
                These are the lines in article one These are the lines in article one These are the lines in article one
                These are the lines in article one These are the lines in article one These are the lines in article one
            </p>
            <p>
                Para 3
                These are the lines in article one These are the lines in article one These are the lines in article one
                These are the lines in article one These are the lines in article one These are the lines in article one
            </p>`
    },
    'article-two':  {
        title: 'Article Two | Bi',
        heading: 'Article Two',
        date: 'Aug 11, 2017',
        paracontent: `
            <p>
                Para 1
                These are the lines in article two
            </p>`
    },
    'article-three':  {
        title: 'Article Three | Bi',
        heading: 'Article Three',
        date: 'Aug 12, 2017',
        paracontent: `
            <p>
                Para 1
                These are the lines in article three
            </p>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var paracontent = data.paracontent;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" >
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    
                    <h2>
                        ${heading}
                    </h2>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${paracontent}
                    </div>
                </div>
            </body>
            
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

// app.get('/article-one', function (req, res){
//  res.send(createTemplate(articleOne));
// });

// app.get('/article-two', function (req, res){
//    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));    
// });

// app.get('/article-three', function (req, res){
//    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));    
//});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
