/// <reference path="../../../typings/tsd.d.ts" />
module QuickExams.Components.Exams {
  export class ExamsIndexCtrl {
    $scope: IExamsIndexScope;
    static NAME = 'ExamsIndexCtrl';
    
    constructor($scope: IExamsIndexScope) {
      this.$scope = $scope;
    }
  }
  
  interface IExamsIndexScope extends ng.IScope {
    
  }
  
  app.addController(ExamsIndexCtrl.NAME, ExamsIndexCtrl);
}