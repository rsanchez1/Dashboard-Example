function AppAssistant() {
}

AppAssistant.prototype.setup = function() {
    this.loadFirstSceneHandler = this.loadFirstScene.bind(this);
    this.loadDashboardHandler = this.loadDashboard.bind(this);
}

AppAssistant.prototype.handleLaunch = function(launchParams) {
    if (!launchParams) {
        // first, check if the app is already launched
        var stageController = this.controller.getStageController('main');
        if (stageController) {
            // main stage exists
            stageController.activate();
        } else {
            this.controller.createStageWithCallback({name: 'main', assistantName: 'MainAssistant', lightweight: true}, this.loadFirstSceneHandler);
        }
    } else {
        // check the launch params
        if (launchParams.action == 'dashboard') {
            var dashboardController = this.controller.getStageController('dashboard');
            if (!dashboardController) {
                this.controller.createStageWithCallback({name: 'dashboard', lightweight: true}, this.loadDashboardHandler, 'dashboard');
            }
        } else {
            // in this example, if the action param isn't dashboard, launch the main card stage
            var stageController = this.controller.getStageController('main');
            if (stageController) {
                // main stage exists
                stageController.activate();
            } else {
                this.controller.createStageWithCallback({name: 'main', assistantName: 'MainAssistant', lightweight: true}, this.loadFirstSceneHandler);
            }
        }
    }
}

AppAssistant.prototype.loadFirstScene = function(stageController) {
    stageController.pushScene('first');
}

AppAssistant.prototype.loadDashboard = function(stageController) {
    stageController.pushScene('dashboard');
}
