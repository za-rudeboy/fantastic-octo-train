var fs = require('fs');
module.exports = {
    writeFile: (filename, data) => {
        var promise = new Promise((resolve, reject) => {
            fs.writeFile(filename, JSON.stringify(data), 'utf8', (err) => {
                if (err) {
                    console.error('Something went wrong');
                    reject(err)
                }
                resolve('Successfully wrote file')
            })
        })
        return promise;
    }
}