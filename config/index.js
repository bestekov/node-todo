const configValues = require('./config');

module.exports = {

    // note, this refers to an uncommited config.json
    getDbConnectionString: funtion() {
        return 'mongodb://' + configValues.uname +
        ':' + configValues.pwd +
        '@localhost:27017/nodetodosample';
    }

}