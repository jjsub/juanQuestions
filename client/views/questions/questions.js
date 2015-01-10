(function(){
  'use strict';

  angular.module('meanr')
  .controller('QuestionsCtrl', ['$scope', '$state', 'Question', function($scope, $state, Question){
    $scope.question = {};
    var object = {category:'Profound', language:'english'};
    $scope.questions = [];
    $scope.askedQuestions = [];
    Question.getQuestions(object).then(function(response){
      $scope.questions = response.questions;
      console.log(response.questions);
    });
    $scope.randomQuestion = function(){
      var question = generateRandomNumber();
      for(var i = 0; i < $scope.questions.length; i++){
        if(question === $scope.questions[i].number){
          $scope.question = $scope.questions[i];
        }
      }
      $scope.askedQuestions.push(question);
      console.log($scope.question);
    };
    function generateRandomNumber(){
      var isUnique = false,
          randomNumber;
      while(!isUnique){
        randomNumber = Math.floor(Math.random() * $scope.questions.length) + 1;
        var sum = 0;
        for(var i = 0; i < $scope.askedQuestions.length; i++){
          if(randomNumber === $scope.askedQuestions[i]){
            sum += 1;
          }
        }
        if(sum === 0){
          isUnique = true;
        }
      }
      return randomNumber;
    }

  }]);
})();

