/// <reference path="../../../typings/tsd.d.ts" />

module QuickExams.Components.Exams {
  class ExamsIndexDirective implements ng.IDirective {
    static NAME = 'qeExamsIndex';
    restrict = 'E';
    templateUrl = 'wwwroot/components/exams/examsIndexView.html';
    controller = ExamsIndexCtrl.NAME;

    constructor() {
    }

    link($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IExamsIndexCtrl) {
      ctrl.init(element);
    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new ExamsIndexDirective();
      directive.$inject = [];
      return directive;
    }
  }

  app.addDirective(ExamsIndexDirective.NAME, ExamsIndexDirective.factory());
}
