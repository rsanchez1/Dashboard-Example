function DashboardAssistant() {
}

DashboardAssistant.prototype.setup = function() {
    this.dashboardTapHandler = this.dashboardTap.bindAsEventListener(this);
}

DashboardAssistant.prototype.activate = function() {
    var dashboardTemplate = Mojo.View.render({template: 'dashboard/dashboard-template'});
    var dashboardScene = this.controller.get('dashboard-scene');
    dashboardScene.innerHTML = dashboardTemplate;
    this.controller.listen('dashboard-text', Mojo.Event.tap, this.dashboardTapHandler);
}

DashboardAssistant.prototype.dashboardTap = function() {
    Mojo.Controller.getAppController().assistant.handleLaunch({action: 'main'});
    setTimeout(function() {this.controller.window.close();}.bind(this), 1000); // close the dashboard when the main scene is launched
}

DashboardAssistant.prototype.deactivate = function() {
}

DashboardAssistant.prototype.cleanup = function() {
}
