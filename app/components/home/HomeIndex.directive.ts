/// <reference path="../../../typings/tsd.d.ts" />

module QuickExams.Components.Home {
  class HomeIndexDirective implements ng.IDirective {
    static NAME = 'qeHomeIndex';
    restrict = 'EA';
    templateUrl = 'wwwroot/components/home/homeIndexView.html';
    controller = HomeIndexCtrl.NAME;

    constructor() {
    }

    link($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IHomeIndexCtrl) {
      ctrl.init(element);
    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new HomeIndexDirective();
      directive.$inject = [];
      return directive;
    }
  }

  app.addDirective(HomeIndexDirective.NAME, HomeIndexDirective.factory());
}
