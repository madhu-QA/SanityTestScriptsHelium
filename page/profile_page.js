var profile_page=function(){
	var currentPassword='password1';
	this.changeProfileFirstName=function(FirstName){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
	  element(by.model('account.firstName')).clear();
       
	element(by.model('account.firstName')).sendKeys(FirstName);
   
       element(by.buttonText("Update Profile")).click();
};


this.changePassword=function(newPassword){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
 element(by.model("account.currentPassword")).sendKeys(currentPassword);
 element(by.model("account.password")).sendKeys(newPassword);
    element(by.model("account.passwordConfirm")).sendKeys(newPassword);
	element(by.buttonText("Change Password")).click();
};
this.changePasswordToOld=function(newPassword){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
 element(by.model("account.currentPassword")).sendKeys(newPassword);
 element(by.model("account.password")).sendKeys(currentPassword);
    element(by.model("account.passwordConfirm")).sendKeys(currentPassword);
	element(by.buttonText("Change Password")).click();
};
this.getFirstName=function(){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
 
 return element(by.id('accountFirstName')).getText();

};
this.goToDashboard=function(){
		browser.waitForAngular();
          element(by.linkText('Dashboard')).click();
	 };

};
module.exports=new profile_page();