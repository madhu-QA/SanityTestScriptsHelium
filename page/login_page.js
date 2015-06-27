var login_page=function(){
this.doLogin=function(){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
		element(by.model("login")).sendKeys("madbee");
		element(by.model("password")).sendKeys("password1");
		//element(by.model("login")).sendKeys("testmckqa2+0400@gmail.com");
		//element(by.model("password")).sendKeys("password");
		element(by.css('#loginSubmit')).click();
		};
		this.doLoginWithEmail=function(email){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
		element(by.model("login")).sendKeys(email);
		element(by.model("password")).sendKeys("password1");
		//element(by.model("login")).sendKeys("testmckqa2+0400@gmail.com");
		//element(by.model("password")).sendKeys("password");
		element(by.css('#loginSubmit')).click();
		};
		
		
		this.doLogout=function(){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
	   			element(by.linkText('Logout')).click();

		
		};
		this.doLoginWithNewPassword=function(newPassword){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
		element(by.model("login")).sendKeys("madbee");
		element(by.model("password")).sendKeys(newPassword);
		element(by.css('#loginSubmit')).click();
		};
		
		
		
};



	module.exports=new login_page();

