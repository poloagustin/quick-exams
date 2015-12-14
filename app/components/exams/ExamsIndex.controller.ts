/// <reference path="../../../typings/tsd.d.ts" />
module QuickExams.Components.Exams {
  export class ExamsIndexCtrl implements IExamsIndexCtrl {
    $scope: IExamsIndexScope;
    $element: ng.IAugmentedJQuery;

    static NAME = 'ExamsIndexCtrl';

    constructor($scope: IExamsIndexScope) {
      this.$scope = $scope;
    }

    init(element: ng.IAugmentedJQuery): void {
      this.$element = element;
    }
  }

  interface IExamsIndexScope extends ng.IScope {

  }

  export interface IExamsIndexCtrl {
    init(element: ng.IAugmentedJQuery): void;
  }

  app.addController(ExamsIndexCtrl.NAME, ExamsIndexCtrl);
}