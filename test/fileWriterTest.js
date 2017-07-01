var writeFile = require('../app/filewriter').writeFile
var expect = require('chai').expect;

describe('File Writer', () => {
    it('should write file to disk', () => {
        var input = {test : 'test'}
        writeFile('test/writeFileTest.json', input).then(
            (successMessage) => {
                expect(successMessage).not.to.be.undefined
            }
        )
    });
});