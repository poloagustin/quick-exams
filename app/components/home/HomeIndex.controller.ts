/// <reference path="../../../typings/tsd.d.ts" />
module QuickExams.Components.Home {
  export class HomeIndexCtrl {
    $scope: IHomeIndexScope;
    static NAME = 'HomeIndexCtrl';
    
    constructor($scope: IHomeIndexScope) {
      this.$scope = $scope;
    }
  }
  
  interface IHomeIndexScope extends ng.IScope {
    
  }
  
  app.addController(HomeIndexCtrl.NAME, HomeIndexCtrl);
}