module QuickExams {
  export class App extends Module {
    static NAME = 'quickExams';
    static MODULES = ['ngRoute', 'ngResource', 'LocalStorageModule', 'ngMaterial'];

    constructor() {
      super(App.NAME, App.MODULES);
    }
  }

  export function getApp() {
    return new App();
  }
}

var app = QuickExams.getApp();
