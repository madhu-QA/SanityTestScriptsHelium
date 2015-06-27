var courses_page=function(){
	
	this.startExam=function(examNumber){
	  browser.waitForAngular();
           var clickStartAnExam=(function(){
				return function() {	
browser.waitForAngular();	
element(by.css('.btn-default:not(.ng-hide)')).isPresent().then(function(isVisible) {
							if (isVisible){	
		element.all(by.css('.btn-default:not(.ng-hide)')).then(function(items){

			console.log("total exams to start : "+items.length);
			//items[examNumber].click();
			//var tdButton=items[examNumber];
			element.all(by.css("h3")).then(function(items){
								console.log("There are "+(items.length-1)+" kinds of exams");

			items[0].getText().then(function(text){
				console.log("Title 1"+text);
				});
				items[1].getText().then(function(text){
				console.log("Title 2"+text);
				});
				items[2].getText().then(function(text){
				console.log("Title 3"+text);
			});
			items[3].getText().then(function(text){
				console.log("Title 1"+text);
				});
		});

items[examNumber].click();	
		});
							}		
							else{
								console.log("no exams");
									};
						});

				};
				})();
   
			//browser.executeScript('arguments[0].click();', items[examNumber]);			
		//return require('./examMode_page.js');
		clickStartAnExam();		

	  };
    	
	this.resumeExam=function(examNumber){
		browser.waitForAngular();
		element.all(by.css('.btn-primary:not(.ng-hide)')).then(function(items){
		  console.log("total exams to resume : "+items.length);
			//browser.executeScript('arguments[0].click();', items[examNumber]);			
							items[examNumber].click();
	
		});
	};
	
	this.retakeExam=function(examNumber){
		browser.waitForAngular();
		element.all(by.css('.btn-warning:not(.ng-hide)')).then(function(items){
	//var el = ($('button.btn:not(.ng-hide)'));
		

			console.log("total exams to retake   : "+items.length);
					//console.log($(this).parent('h3').text());
					element.all(by.css("h3")).then(function(items){
								console.log("There are "+(items.length-1)+" kinds of exams");

			items[0].getText().then(function(text){
				console.log("Title 1"+text);
				});
				items[1].getText().then(function(text){
				console.log("Title 2"+text);
				});
				items[2].getText().then(function(text){
				console.log("Title 3"+text);
			});
			items[3].getText().then(function(text){
				console.log("Title 1"+text);
				});
		});
					items[examNumber].click();
		});

//var divElement=items[examNumber].$(parent('div'));
/* divElement.then(function(){
	
	element(by.css("select option:nth-child('1')")).getText().then(function(text){
		
	
	
	console.log("The type of exam being retaken: "+text);
});
}); */
							//browser.driver.executeScript('arguments[0].click();', items[examNumber]);
						//	});
		/* element(by.buttonText('Retake')).isDisplayed().then(function (isVisible) {
    if (isVisible) {
        // element is visible
		element(by.buttonText('Retake')).click();
    } else {
        // element is not visible
		console.log("El not visible");
    }
		});
			element(by.buttonText('Retake')).isPresent().then(function (isPresent) { */
    
	
		//el.click();
		//browser.driver.executeScript('arguments[0].click();', el);		
        //  element.all(by.css(el)).then(function(items){
		// items[examNumber].click();
		//	browser.driver.executeScript('arguments[0].click();', items[examNumber]);			
					//return require('./examMode_page.js');

		//});
	};
	
	
	
	
};
module.exports=new courses_page();