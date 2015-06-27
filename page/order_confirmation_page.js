var order_confirmation_page=function(){
	
	this.clickContinue=function(){
		browser.waitForAngular();
		element(by.linkText('Continue')).isPresent().then(function(isVisible) {
							if (isVisible){
	  element(by.linkText('Continue')).click();
							}
							else{
								console.log('Continue button not found');
							}
//return require('./dashboard_page.js');
		});
	};
	
	
	
	
	
	
	
};
module.exports=new order_confirmation_page();