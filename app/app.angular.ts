module QuickExams {
  export class Module {
    app: ng.IModule;
    name: string;

    constructor(name: string, modules: Array<string>) {
      this.app = angular.module(name, modules);
      this.name = name;
    }

    addService(name: string, service: Function) {
      this.app.service(name, service);
    }

    addFactory(name: string, factory: Function) {
      this.app.factory(name, factory);
    }

    addConfigurationFunction(config: Function) {
      this.app.config(config);
    }

    addConfiguration(config: any[]) {
      this.app.config(config);
    }

    addConstant(name: string, obj: any) {
      this.app.constant(name, obj);
    }

    addDirective(name: string, obj: ng.IDirectiveFactory) {
      this.app.directive(name, obj);
    }

    addController(name: string, obj: Function) {
      this.app.controller(name, obj);
    }
  }
}
