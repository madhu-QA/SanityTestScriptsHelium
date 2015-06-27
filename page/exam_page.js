var exam_page=function(){
	
	this.takeReviewModeExamAndFinish=function(){
		browser.waitForAngular();
				var clickAnswer=(function(){
				return function() {		
						element(by.buttonText('Grade')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.css('.label-default')).then(function(answers){
                        answers[0].click();
						
								
								
						element(by.buttonText('Grade')).click();	
							
						
						element(by.buttonText('Next')).isPresent().then(function(isVisible) {
							if (isVisible){
					      element(by.buttonText('Next')).click();
							}
							else{
								//console.log("no next-all done");
									};
						});
						element(by.buttonText('Done')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						errorsOnThePage=errors.length;
						console.log('Total errors till current page : '+errorsOnThePage);
						gradePercent=(50-errorsOnThePage)*2;
						
								console.log('Final Grade of the exam should be : '+gradePercent);
								
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});
					      element(by.buttonText('Done')).click();
						 // protractor.promise.defer().fulfill('true');
						 // done();					
						 }
							else{
								//console.log("finished exam!");
								clickAnswer();
									};
						});
						//expect(protractor.promise.defer()).toBe('true');
						
						
						 
						});
						}
							else{
								//console.log("no more questions");
									};
						});
						 
};
 
			})();
			clickAnswer();
                        };
        
        
        this.takeExamModeExamAndFinish=function(){
            browser.waitForAngular();
            for (var QuestionPages=1;QuestionPages<101;QuestionPages++){
            element.all(by.css('span.label')).then(function(answers){
            answers[0].click();
            element(by.buttonText('Next')).click();
                            });
                        };
                    };
                        
        this.calculateScore50 = function() {
            browser.waitForAngular();
            element.all(by.css('span.text-danger')).then(function(item) {
            console.log (Math.round((50-item.length)/50*100) + "%");
                });
            };
            
        this.calculateScore100 = function() {
            browser.waitForAngular();
            element.all(by.css('span.text-danger')).then(function(item) {
            console.log (Math.round((100-item.length)/100*100) + "%");
                });
            };
        
        this.calculateScore120 = function() {
            browser.waitForAngular();
            element.all(by.css('span.text-danger')).then(function(item) {
            console.log (Math.round((120-item.length)/120*100) + "%");
                });
            };
        
        this.takeSpeedExamAndFinish=function(){
			browser.waitForAngular();
			var Errors=0;
				var errorsOnThePage=0;
				var clickAnswer=(function(){
				return function() {		
						element(by.buttonText('Grade')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.repeater('question in step.questions ')).then(function(questions){
					for (var QuestionNumber=0;QuestionNumber<10;QuestionNumber++){
						questions[QuestionNumber].getText().then(function(text){
						//console.log('Question: '+text);
						});
						//element-chaining element(locator1).element(locator2);
							questions[QuestionNumber].all(by.css('span.label')).then(function(answers){
								answers[4].getText().then(function(text){
								//console.log('clicking the answer: '+text);
								answers[4].click();
													});
									
												});
					};
						
								
								
						element(by.buttonText('Grade')).click();	
							
						
						element(by.buttonText('Next')).isPresent().then(function(isVisible) {
							if (isVisible){
					      element(by.buttonText('Next')).click();
							}
							else{
								//console.log("no next-all done");
									};
						});
						element(by.buttonText('Done')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						errorsOnThePage=errors.length;
						console.log('Total errors till current page : '+errorsOnThePage);
						gradePercent=(50-errorsOnThePage)*2;
						
								console.log('Final Grade of the exam should be : '+gradePercent);
								
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});
					      element(by.buttonText('Done')).click();
						 // protractor.promise.defer().fulfill('true');
						 // done();					
						 }
							else{
								//console.log("finished exam!");
								clickAnswer();
									};
						});
						//expect(protractor.promise.defer()).toBe('true');
						
						
						 
						});
						}
							else{
								//console.log("no more questions");
									};
						});
						 
};
 
			})();
			clickAnswer();
		/* browser.waitForAngular();
		var gradePercent=0;
			for (var QuestionPages=1;QuestionPages<6;QuestionPages++){
				var Errors=0;
				var errorsOnThePage=0;
				console.log('Page: '+QuestionPages);
					element.all(by.repeater('question in step.questions ')).then(function(questions){
					for (var QuestionNumber=0;QuestionNumber<10;QuestionNumber++){
						questions[QuestionNumber].getText().then(function(text){
						//console.log('Question: '+text);
						});
						//element-chaining element(locator1).element(locator2);
							questions[QuestionNumber].all(by.css('span.label')).then(function(answers){
								answers[4].getText().then(function(text){
								//console.log('clicking the answer: '+text);
								answers[4].click();
													});
									
												});
					};
					element(by.buttonText('Grade')).click();
					browser.waitForAngular();
						element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						element(by.buttonText('Next')).click();	
						errorsOnThePage=errors.length;
						Errors=Errors+ errorsOnThePage;
						console.log('Total errors till current page : '+Errors);
						gradePercent=(50-Errors)*2;
						if (QuestionPages===6){
								console.log('Final Grade of the exam should be : '+(50-Errors)*2);
								};
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});	
						
				});
				
			};
					browser.waitForAngular(); */
	
		};
				this.startAndFinishExam=function(){
		browser.waitForAngular();
				var clickAnswer=(function(){
				return function() {	
						browser.waitForAngular();
						element(by.css('span.label')).isPresent().then(function(isVisible) {
							if (isVisible){				
						 element.all(by.css('span.label')).then(function(answers){
                        answers[0].click();
                        //element(by.buttonText('Grade')).click();
                        element(by.buttonText('Next')).click();
						element(by.buttonText('Done')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						errorsOnThePage=errors.length;
						console.log('Total errors till current page : '+errorsOnThePage);
						gradePercent=(50-errorsOnThePage)*2;
						
								console.log('Final Grade of the exam should be : '+gradePercent);
								
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});
					      element(by.buttonText('Done')).click();
						 // protractor.promise.defer().fulfill('true');
						 // done();					
						 }
							else{
								//console.log("finished exam!");
								clickAnswer();
									};
						});
                                });
						}
							else{
								//console.log("no more questions");
									};
						});
						 
};
 
			})();
			clickAnswer();
};
		
		this.resumeReviewModeExam=function(){
		browser.waitForAngular();
				var clickAnswer=(function(){
				return function() {		
						element(by.buttonText('Grade')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.css('.label-default')).then(function(answers){
                        answers[0].click();
						
								
								
						element(by.buttonText('Grade')).click();	
							
						
						element(by.buttonText('Next')).isPresent().then(function(isVisible) {
							if (isVisible){
					      element(by.buttonText('Next')).click();
							}
							else{
								//console.log("no next-all done");
									};
						});
						element(by.buttonText('Done')).isPresent().then(function(isVisible) {
							if (isVisible){
								element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						errorsOnThePage=errors.length;
						console.log('Total errors till current page : '+errorsOnThePage);
						gradePercent=(50-errorsOnThePage)*2;
						
								console.log('Final Grade of the exam should be : '+gradePercent);
								
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});
					      element(by.buttonText('Done')).click();
						 // protractor.promise.defer().fulfill('true');
						 // done();					
						 }
							else{
								//console.log("finished exam!");
								clickAnswer();
									};
						});
						//expect(protractor.promise.defer()).toBe('true');
						
						
						 
						});
						}
							else{
								//console.log("no more questions");
									};
						});
						 
};
 
			})();
			clickAnswer();
};
		
		
			 
					
	this.clickDone=function(){
				
				
				
	
element(by.buttonText('Done')).click();
};

						
		      
			  
		
	
			
			
	
		/* 	var answerQuestionsRemaining=function () {
							return (function () {
							return true;
							}, function () {
								if (element(by.buttonText('Grade')).count() == 0) {
							return false;
								};
							});
							},
			
			
			
			
			
			
  
			for (var QuestionPages=1;;QuestionPages++){
				var Errors=0;
				var errorsOnThePage=0;
				console.log('Page: '+QuestionPages);
					element.all(by.repeater('question in step.questions ')).then(function(questions){
					for (var QuestionNumber=0;QuestionNumber<10;QuestionNumber++){
						questions[QuestionNumber].getText().then(function(text){
						//console.log('Question: '+text);
						});
						//element-chaining element(locator1).element(locator2);
							questions[QuestionNumber].all(by.css('span.label')).then(function(answers){
								answers[4].getText().then(function(text){
								//console.log('clicking the answer: '+text);
								answers[4].click();
													});
									
												});
					};
					element(by.buttonText('Grade')).click();
					browser.waitForAngular();
						element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						element(by.buttonText('Next')).click();	
						errorsOnThePage=errors.length;
						Errors=Errors+ errorsOnThePage;
						console.log('Total errors till current page : '+Errors);
						gradePercent=(50-Errors)*2;
						if (QuestionPages===6){
								console.log('Final Grade of the exam should be : '+(50-Errors)*2);
								};
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});	
						
				});
				
			};
		};
					browser.waitForAngular();
	
		}; */
	this.clickContinue=function(){
		element(by.buttonText('Grade')).click();
		element(by.buttonText('Grade')).click();
	};
				

	this.saveAndExitExam=function(){
		browser.waitForAngular();
          for (var QuestionPages=1;QuestionPages<31;QuestionPages++){
                    element.all(by.css('span.label')).then(function(answers){
                        answers[0].click();
                        //element(by.buttonText('Grade')).click();
                        element(by.buttonText('Next')).click();
                                });
                            };

	  element(by.buttonText("Save Progress and Exit")).click();


    
	
    
	};
	this.saveAndExitExamReviewMode=function(){
		browser.waitForAngular();
          for (var QuestionPages=1;QuestionPages<31;QuestionPages++){
                    element.all(by.css('span.label')).then(function(answers){
                        answers[0].click();
                        element(by.buttonText('Grade')).click();
                        element(by.buttonText('Next')).click();
                                });
                            };

	  element(by.buttonText("Save Progress and Exit")).click();


    
	
    
	};
	
	
};
	
	
	
	
	
module.exports=new exam_page();