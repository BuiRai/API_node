/**
 * Created by buira on 15/08/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);

