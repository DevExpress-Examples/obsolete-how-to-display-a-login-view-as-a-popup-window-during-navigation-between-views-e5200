LogOnAsPopupView.LogOnPopup = function (params) {

    var viewModel = {
        email: ko.observable(""),
        password: ko.observable(""),
        visible: ko.observable(false),
        logOn: function() {
            var email = this.email(),
                password = this.password();
            
            //Authenticate a user here
            var authenticated = true;
            //

            if(authenticated) {
                LogOnAsPopupView.loggedOn(true);
                if(this.redirectParams) {
                    LogOnAsPopupView.app.navigate(this.redirectParams.uri, this.redirectParams.options);
                }
                this.close();
            }
            else {
                //Process unsuccessful attempt here
            }
        },
        show: function(redirectParams) {
            this.visible(true);
            this.redirectParams = redirectParams;
        },
        close: function() {
            this.visible(false);
            delete this.redirectParams;
        }
    };

    return viewModel;
};