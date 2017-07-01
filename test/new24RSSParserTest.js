var news24Parser = require('../app/news24RSSParser').news24Parser
var fs = require('fs')
var expect = require('chai').expect;

describe('News24 Parser', () => {
  it('should parse news24 data', () => {
    fs.readFile('test/resources/news24.json', 'utf8', function (err, data) {
      var parsedData = JSON.parse(data)
      news24Parser(parsedData).then(
        (output) => {
          expect(output).not.to.be.undefined;
          expect(output.site).equals('News 24')
          expect(output.title).equals('News24 Top Stories')
          expect(output.newsItems).lengthOf(20)
          var firstItem = output.newsItems[0]
          expect(firstItem.title).equals('News24.com | The people must show leaders the door - Mbeki')
          expect(firstItem.description).equals('Political leaders who have \"overstayed their welcome\"must be shown the door by their own people, former President Thabo Mbeki has said.')
          expect(firstItem.link).equals('http://www.news24.com/SouthAfrica/News/the-people-must-show-leaders-the-door-mbeki-20170618')
        }
      )
    });
  })
});