angular.module('ngApp', [])
  .factory('SimpleGraph', function($http) {
    return {
      get : function(url,callback){
        $http.get(url)
        .success(function(data, status, headers, config) {
          callback(data);
        }).
        error(function(data, status, headers, config) {
          callback({error:1});
        });
      }
    };
  })
  .controller('ngCtrl', ['$scope', 'SimpleGraph', function($scope, SimpleGraph) {
      $scope.data = null;
      var page = "weloveprettygirl";
      var url = "http://graph.facebook.com/"+page+"/albums";
      SimpleGraph.get(url, function(data){
        if(!data.error) {
          $scope.data = data;
        }
      });
    }
  ]);
