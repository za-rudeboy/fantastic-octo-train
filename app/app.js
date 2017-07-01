var unirest = require('unirest')
var parser = require('xml2js').Parser({ explicitArray: false })
var news24Parser = require('./news24RSSParser').news24Parser
var writeFile = require('./filewriter').writeFile

unirest.get('http://feeds.news24.com/articles/news24/TopStories/rss')
  .headers({ 'Accept': 'text/xml', 'Content-Type': 'text/xml' })
  .end(function (response) {
    var xmlResponse = response.body
    var allFeeds = [];
    parseString(xmlResponse)
      .then(news24Parser)
      .then((data) => {
        allFeeds.push(data)
        writeFile('fantastic-octo-train/app/feed.json', allFeeds)
      })
  });

function parseString(xmlResponse) {
  return new Promise(function (resolve, reject) {
    parser.parseString(xmlResponse, function (err, result) {
      if (err != null) return reject(err)
      resolve(result)
    });
  })
}