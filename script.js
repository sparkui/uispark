angular.module('demo', ['ngRoute']).controller('DemoController', function($scope, $location, $anchorScroll, codeService) {

  $scope.demoList = window.demoList;
  $scope.demoMap = {};

  $scope.scrollToDemo = function(name){
    console.log('component-' + name);
    $location.hash('component-' + name);
    $anchorScroll();
  };
  $scope.viewDemo = function(name) {
    if (name !== 'default') $location.path(name);

    var demoFolder = 'views/';
    var htmlPath = demoFolder + name + '/index.html';
    var jsPath = demoFolder + name + '/script.js';
    var cssPath = demoFolder + name + '/style.css';

    if(!$scope.demoMap[name]) $scope.demoMap[name] = {};
    $scope.demoMap[name].viewName = name;

    $scope.demoMap[name].codeViewing = false;

    $scope.demoMap[name].currentUrl = htmlPath;
    $scope.demoMap[name].currentTab = 0;


    var renderCode = function() {
      setTimeout(function() {
        var pres = document.querySelectorAll('#codeview' + name + ' .code-contents pre');
        [].forEach.call(pres, function(pre) {
          Prism.highlightElement(pre);
        });
      }, 300);
    };

    codeService.getCode(htmlPath)
      .then(function(result) {
        $scope.demoMap[name].htmlCode = result.data;
        return codeService.getCode(jsPath);
      }, function() {
        return codeService.getCode(jsPath);
      })
      .then(function(result) {
        $scope.demoMap[name].jsCode = result.data;
        return codeService.getCode(cssPath);
      }, function() {
        return codeService.getCode(cssPath);
      })
      .then(function(result) {
        $scope.demoMap[name].cssCode = result.data;
        renderCode();
      }, function() {
        renderCode();
      });
  };

  $scope.toggleCodeViewer = function() {
    $scope.codeViewing = !$scope.codeViewing;
  };

  $scope.switchTab = function(name,index) {
    $scope.demoMap[name].currentTab = index;
  };
}).factory('codeService', function($http) {
  return {
    getCode: function(path) {
      return $http.get(path);
    }
  }
}).directive('iframeHeight', function(){
  return function(scope, $element, attrs){
    if(attrs.height === 'auto'){
      var iframe = angular.element($element)[0];
      iframe.onload = function(){
        try{
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight) + 20;
        iframe.height = height;
        }catch (ex){
          console.error(ex);
        }
      };
    }
  };
});
