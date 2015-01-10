'use strict';

var Question = require('../models/question');

exports.getQuestions = function(req, res){
  console.log('made it here ' + req.body);
  Question.getQuestions(req.body.category, req.body.language, function(err, questions){
    res.send({questions:questions});
  });
};
