window.LogOnAsPopupView = window.LogOnAsPopupView || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    //DevExpress.devices.current({ platform: "generic" });

    var app = new DevExpress.framework.html.HtmlApplication({
        namespace: LogOnAsPopupView,
        navigationType: LogOnAsPopupView.config.navigationType,
        navigation: LogOnAsPopupView.config.navigation
    });
    LogOnAsPopupView.app = app;

    app.router.register(":view/:id", { view: "home", id: undefined });

    app.initialized.add(function() {
        var $view = app.getViewTemplate("LogOnPopup");
        $view.appendTo(".dx-viewport");
        LogOnAsPopupView.loggedOn = ko.observable(false);
        LogOnAsPopupView.logOnPopupViewModel = LogOnAsPopupView.LogOnPopup();

        ko.applyBindings(LogOnAsPopupView.logOnPopupViewModel, $view[0]);
    });

    app.navigating.add(function(e) {
        var params = app.router.parse(e.uri),
            viewInfo = app.getViewTemplateInfo(params.view);
        if(viewInfo.secure && !LogOnAsPopupView.loggedOn()) {
            e.cancel = true;
            LogOnAsPopupView.logOnPopupViewModel.show(e);
        }
    });

    LogOnAsPopupView.app.navigate();
});
