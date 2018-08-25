const configValues = require('./config');

module.exports = {

    // note, this refers to an uncommited config.json
    getDbConnectionString: function() {
        // return 'mongodb://' + configValues.uname +
        // ':' + configValues.pwd +
        // '@localhost:27017/nodetodosample';

        // For this sample app there is no auth - DON'T DO THIS FOR REAL APPS
        return 'mongodb://@localhost:27017/nodetodosample';
    }

}