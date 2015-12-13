module QuickExams {
  export class Module {
    app: ng.IModule;
    name: string;

    constructor(name: string, modules: Array<string>) {
      this.app = ng.module(name, modules);
      this.name = name;
    }

    addService(name: string, service: Function) {
      this.app.service(name, service);
    }

    addFactory(name: string, factory: Function) {
      this.app.factory(name, factory);
    }

    addConfiguration(config: Array<any>) {
      this.app.config(config);
    }

    addConstant(name: string, obj: any) {
      this.app.constant(name, obj);
    }
    
    addDirective(name: string, obj: any) {
      this.app.directive(name, obj);
    }
    
    addController(name: string, obj: Function) {
      this.app.controller(name, obj);
    }
  }
}
