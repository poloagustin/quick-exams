/// <reference path="../../../typings/tsd.d.ts" />
module QuickExams.Components.Home {
  export class HomeIndexCtrl implements IHomeIndexCtrl {
    $scope: IHomeIndexScope;
    $element: ng.IAugmentedJQuery;
    
    static NAME = 'HomeIndexCtrl';

    constructor($scope: IHomeIndexScope) {
      this.$scope = $scope;
    }
    
    init(element: ng.IAugmentedJQuery): void {
      this.$element = element;
    }
  }

  interface IHomeIndexScope extends ng.IScope {

  }

  export interface IHomeIndexCtrl {
    init(element: ng.IAugmentedJQuery): void;
  }

  app.addController(HomeIndexCtrl.NAME, HomeIndexCtrl);
}
