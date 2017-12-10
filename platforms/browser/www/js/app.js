var app = angular.module("toolMainApp",[]);
	app.value("appTitle","Tool App");
	app.value("appFooterText","Tool App is ecosystem of web application container utilities.");
	app.controller("HeaderController",HeaderContr);
	app.controller("FooterController",FooterContr)
	
	function HeaderContr(appTitle){
		this.appTitle = appTitle;
	}
	
	function FooterContr(appTitle,appFooterText){
		this.appTitle = appTitle;
		this.textFooter = appFooterText;
	}
	