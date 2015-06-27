var examMode_page=function(){
	
	this.selectMode=function(modeNumber){
		browser.waitForAngular();
		var clickMode=(function(){
				return function() {		
						element(by.tagName('h4')).isPresent().then(function(isVisible) {
							if (isVisible){
          element.all(by.tagName('h4')).then(function(items){
			  //console.log('items length is: '+items.length);
			//  console.log('Selected mode: '+items[modeNumber].getText());

			  items[modeNumber].click();
			  
			  			//browser.executeScript('arguments[0].click();', items[modeNumber]);			
			  	//	return require('./exam_page.js');

          });
							}
							else{
								console.log("no exam mode");
									};
						});
				};
		})();
    clickMode();
	};
	
	
	
	
	
};
module.exports=new examMode_page();