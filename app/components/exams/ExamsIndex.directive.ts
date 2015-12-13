/// <reference path="../../../typings/tsd.d.ts" />

module QuickExams.Components.Exams {
  var NAME = 'qeExamsIndex';
  
  var examsIndexDirective: ng.IDirective = {
    restrict: 'E',
    controller: ExamsIndexCtrl.NAME,
    templateUrl: 'public/components/exams/examsIndexView.html'
  }
  
  app.addDirective(NAME, examsIndexDirective);
}
