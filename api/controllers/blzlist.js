'use strict';

var util = require('util');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var blzSchema = mongoose.Schema({
    name: String,
    blz: String
});
var BlzModel = mongoose.model('blzs', blzSchema);

function blzs(req, res) {
  var params = req.swagger.params;
  var name = params.name.value || '';
  var blz = params.blz.value || '';
  var skip = params.skip.value || 0;
  var limit = params.limit.value || 20;

  var search = {};
  if (name !== '') {
    search.name = {'$regex': name};
  } else if (blz !== '') {
    search.blz = {'$regex': blz};
  }

  BlzModel.find(search, function (err, blzList) {
    if (err) return console.error(err);
    res.json(blzList);
  })
  .skip(skip)
  .limit(limit);
}

module.exports = {
  blzs: blzs
};
