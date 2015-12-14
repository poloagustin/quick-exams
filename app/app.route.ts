module QuickExams {
	class Routes {
		static $inject = ['$routeProvider'];

		constructor($routeProvider: ng.route.IRouteProvider) {
			this.configureRouter($routeProvider);
		}

		configureRouter(router: ng.route.IRouteProvider) {
			this.when(router, '/', 'home-index', true);
			this.when(router, '/exams', 'exams-index');
			var otherwise: ng.route.IRoute = { redirectTo: '/' };
			router.otherwise(otherwise);
		}

		when(router: ng.route.IRouteProvider, path: string, directive: string, isPublic?: boolean) {
			var route: IQuickExamsRouter = {
				template: '<qe-' + directive + '></qe-' + directive + '>',
				isPublic: isPublic
			};
			router.when(path, route);
		}
	}

	interface IQuickExamsRouter extends ng.route.IRoute {
		isPublic: boolean;
	}
	
	app.addConfigurationFunction(Routes);
}

