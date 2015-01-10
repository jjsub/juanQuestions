(function(){
  'use strict';

  angular.module('meanr')
  .factory('Question', ['$http', function($http){
    function getQuestions(object){
      return $http.post('/questions', {object:object});
    }
    return {getQuestions:getQuestions};
  }]);
})();
