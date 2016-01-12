var lib = require('parse');

module.exports = {
    getLib: function(){
        return lib;
    },
    setLibForNodeTesting: function(){
        lib = require('parse/node');
    }
}