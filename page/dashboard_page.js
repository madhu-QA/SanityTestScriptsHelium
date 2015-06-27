var dashboard_page=function(){
	
	this.goToCourses=function(courseNumber){
		browser.waitForAngular();
		var clickStartorResume=(function(){
				return function() {	
browser.waitForAngular();				
						element(by.buttonText('Start or Resume Exams')).isPresent().then(function(isVisible) {
							if (isVisible){
		browser.waitForAngular();
           element.all(by.buttonText("Start or Resume Exams")).then(function(items){
browser.waitForAngular();

console.log("total courses  : "+items.length);
items[courseNumber].click();
browser.waitForAngular();
});
							}
							else{
								console.log("no start button");
									};
							
						});
							//browser.driver.executeScript('arguments[0].click();', items[courseNumber]);
							};
		})();
		clickStartorResume();
	 };
		 
	this.goToProfile=function(){
		browser.waitForAngular();
          element(by.linkText('Profile')).click();
	 };
	
};
module.exports=new dashboard_page();
