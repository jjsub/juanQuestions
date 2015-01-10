'use strict';

function Question(){
}

Object.defineProperty(Question, 'collection', {
  get: function(){return global.mongodb.collection('questions');}
});

Question.getQuestions = function(category, language, cb){
  Question.collection.find({category:category, language:language}).toArray(function(err, questions){
    cb(err, questions);
  });
};

module.exports = Question;

