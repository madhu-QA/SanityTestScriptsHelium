//FOR SAUCE TESTS USE 'browser.' instead of 'browser.driver.' timeout 800000 for sauce test since they run very slow!!!!
var util = require('util');
var home_page=require('../page/home_page.js');
var state_page=require('../page/state_page.js');
var login_page=require('../page/login_page.js'); 
var checkout_page= require('../page/checkout_page.js');
var addToCart_page= require('../page/addToCart_page.js');
var order_confirmation_page= require('../page/order_confirmation_page.js');
var dashboard_page=require('../page/dashboard_page.js');
var courses_page=require('../page/courses_page.js');
var examMode_page=require('../page/examMode_page.js');
var exam_page=require('../page/exam_page.js');
var register_page=require('../page/register_page.js');
var profile_page=require('../page/profile_page.js');
var date = new Date();
 time = date.getTime();
 var name= 'Madhu +'+time;
 var newPassword= 'password';
 var oldPassword='password1';

var add2cart_page=require('../page/addToCart_page.js');
var selectedProductName;
var selectedProductPrice;
var product;
var productPrice;
var skuStates = Object.keys(browser.params);
	
	 
	
describe('Test Helium for LET', function(){
	xit('Verify all states all skus for LET', function() {
		browser.get('https://my.licensetutor.com/register/');
		login_page.doLogin();
		expect(browser.getCurrentUrl()).toContain('dashboard');
		Object.keys(skuStates).forEach(function(sku, index) {
		console.log(sku+" : "+skuStates[index]);
		for(i=0;i<3;i++){
			var func = (function() {
					return function() {
						var skuNumber=browser.params[skuStates[index]][i];
						var j = i; 
						browser.waitForAngular();
						browser.get('https://my.licensetutor.com/addtocart/'+browser.params[skuStates[index]][i]).then(function(){
						var counter = (function() {
									return function() {
									console.log(skuStates[index]+" Plan "+j+" : "+skuNumber);   
														}
												})();
						counter();
											});
						browser.waitForAngular();
						console.log(" Plan "+i+" : "+skuStates[index]+" : "+browser.params[skuStates[index]][i]);
									}	
			 					})();
				func();
				browser.waitForAngular();
				browser.driver.navigate().back();
				browser.waitForAngular();
				expect(browser.driver.getCurrentUrl()).toContain(browser.params[skuStates[index]][i]);
				browser.waitForAngular();
				expect(element(by.buttonText("Remove")).isPresent()).toBe(true); 
				add2cart_page.removeItemFromCart();
				browser.waitForAngular();
				}
		});
				login_page.doLogout();
				//expect(element(by.buttonText('Login')).isPresent()).toBe(true);
	});	
	
	it ('should be able to register, purchase and start exam in exam mode',function(){
	var doRegister= (function(){
				return function() {	
				browser.driver.get('http://my.staging.licensetutor.com/register', 30000);
        email = 'testmckqa2+'+time+'@gmail.com';
		register_page.doRegisterWithEmail(email);
		//login_page.doLogin();
        expect(browser.getCurrentUrl()).toContain('dashboard');
		dashboard_page.goToProfile();
							browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							profile_page.goToDashboard();
							expect(browser.driver.getCurrentUrl()).toContain('dashboard');
		 login_page.doLogout();
				};
	})();
	doRegister();
		var doPurchase= (function(){
				return function() {	
				browser.driver.get('http://my.staging.licensetutor.com/register').then(function(){
			 login_page.doLoginWithEmail(email);
			 expect(browser.getCurrentUrl()).toContain('dashboard');
		dashboard_page.goToProfile();
							browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							profile_page.goToDashboard();
							expect(browser.driver.getCurrentUrl()).toContain('dashboard');
        browser.get('http://my.staging.licensetutor.com/addtocart/'+browser.params.Florida[1]).then(function(){
			//expect(browser.getCurrentUrl()).toContain('dashboard');
			checkout_page.processOrder();
		});
				});
				};
		})();
		doPurchase();
		browser.driver.get('http://my.staging.licensetutor.com/dashboard').then(function(){
		dashboard_page.goToCourses(0);
        expect(browser.getCurrentUrl()).toContain('course');
        courses_page.startExam(0);
		        browser.waitForAngular();

	    examMode_page.selectMode(0);
		        browser.waitForAngular();

		//expect(element(by.css('h3.ng-binding')).getText()).toContain('Review Mode');
        exam_page.startAndFinishExam();
		//exam_page.takeExamModeExamAndFinish();
       // exam_page.calculateScore50();
        browser.waitForAngular();
        //element(by.buttonText('Done')).click();
        browser.waitForAngular();
        login_page.doLogout();
		}, 40000);
			
	});
		
   
   it('should be able to login and retake exam in review mode', function() {
        browser.get('http://my.staging.licensetutor.com/register');
        browser.driver.manage().window().maximize();
        login_page.doLogin();
        expect(browser.getCurrentUrl()).toContain('dashboard');
        dashboard_page.goToCourses(1);
        expect(browser.getCurrentUrl()).toContain('course');
        courses_page.retakeExam(0);
		        browser.waitForAngular();

	    examMode_page.selectMode(2);
		        browser.waitForAngular();

		//expect(element(by.css('h3.ng-binding')).getText()).toContain('Review Mode');
        exam_page.takeReviewModeExamAndFinish();
		//exam_page.takeExamModeExamAndFinish();
       // exam_page.calculateScore50();
        browser.waitForAngular();
        //element(by.buttonText('Done')).click();
        browser.waitForAngular();
        login_page.doLogout();
                });
	it('should be able to login and resume exam in review mode', function() {
        browser.get('http://my.staging.licensetutor.com/register');
        browser.driver.manage().window().maximize();
        login_page.doLogin();
        expect(browser.getCurrentUrl()).toContain('dashboard');
        dashboard_page.goToCourses(1);
        expect(browser.getCurrentUrl()).toContain('course');
		courses_page.startExam(0);
							examMode_page.selectMode(2);
							exam_page.saveAndExitExamReviewMode();
        courses_page.resumeExam(0);
		        browser.waitForAngular();
	   // examMode_page.selectMode(2);
		        browser.waitForAngular();

		//expect(element(by.css('h3.ng-binding')).getText()).toContain('Review Mode');
        exam_page.resumeReviewModeExam();
		//exam_page.clickDone();
       // exam_page.calculateScore50();
        browser.waitForAngular();
        //element(by.buttonText('Done')).click();
        browser.waitForAngular();
        login_page.doLogout();
                }, 80000);
				
	it ('should be able to login and take a test speed mode',function(){
			browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
							expect(browser.driver.getCurrentUrl()).toContain('register');
							login_page.doLogin();
							expect(browser.driver.getCurrentUrl()).toContain('register');
							dashboard_page.goToCourses(0);
							expect(browser.driver.getCurrentUrl()).toContain('course');
							courses_page.retakeExam(0);
							examMode_page.selectMode(1); 
							
							expect(element(by.css('h3.ng-binding')).getText()).toContain('Speed Mode');

							//exam_page.saveAndExit();
							exam_page.takeSpeedExamAndFinish();
							expect(browser.driver.getCurrentUrl()).toContain('/s/');
							login_page.doLogout();
							//expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																							
	});				
		it ('should be able to login and start an exam', function(){
				browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
								expect(browser.driver.getCurrentUrl()).toContain('register');
								login_page.doLogin();
								//expect(browser.driver.getCurrentUrl()).toContain('dashboard');
								dashboard_page.goToCourses(0);
								expect(browser.driver.getCurrentUrl()).toContain('course');
								courses_page.startExam(0);
								examMode_page.selectMode(0); 
								//exam_page.saveAndExitExam();
								exam_page.startAndFinishExam();
								expect(browser.driver.getCurrentUrl()).toContain('course');
								login_page.doLogout();
								//expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																								
		});	
		it ('should be able to save and exit in an exam', function(){
				browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
								expect(browser.driver.getCurrentUrl()).toContain('register');
								login_page.doLogin();
								//expect(browser.driver.getCurrentUrl()).toContain('dashboard');
								dashboard_page.goToCourses(0);
								expect(browser.driver.getCurrentUrl()).toContain('course');
								courses_page.retakeExam(0);
								examMode_page.selectMode(0); 
								exam_page.saveAndExitExam();
								//exam_page.takeSpeedExamAndFinish();
								expect(browser.driver.getCurrentUrl()).toContain('course');
								login_page.doLogout();
								//expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																								
		});				
	it ('should be able to change profile name', function(){		      
			browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
							expect(browser.driver.getCurrentUrl()).toContain('register');
							login_page.doLogin();
							//expect(browser.driver.getCurrentUrl()).toContain('dashboard');
							dashboard_page.goToProfile();
							browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							profile_page.changeProfileFirstName(name);
							 browser.waitForAngular();
							profile_page.goToDashboard();
							expect(browser.driver.getCurrentUrl()).toContain('dashboard');
							dashboard_page.goToProfile();
							 browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							var newName=profile_page.getFirstName();
							//exam_page.takeSpeedExamAndFinish();
							expect(newName).toBe(name);

							//expect(browser.driver.getCurrentUrl()).toContain('course');
							login_page.doLogout();
							//expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																							
	});	
it ('should be able to change password', function(){  
			browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
							expect(browser.driver.getCurrentUrl()).toContain('register');
							login_page.doLogin();
							//expect(browser.driver.getCurrentUrl()).toContain('dashboard');
							dashboard_page.goToProfile();
							browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							profile_page.changePassword(newPassword);
							 browser.waitForAngular();
							 login_page.doLogout();
							 browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
							expect(browser.driver.getCurrentUrl()).toContain('register');
							login_page.doLoginWithNewPassword(newPassword);
							//expect(browser.driver.getCurrentUrl()).toContain('dashboard');
							dashboard_page.goToProfile();
							browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							profile_page.changePasswordToOld(newPassword);
							 browser.waitForAngular();
							 login_page.doLogout();
							 browser.driver.get('http://my.staging.licensetutor.com/register', 800000);	
							expect(browser.driver.getCurrentUrl()).toContain('register');
							login_page.doLogin();
							//expect(browser.driver.getCurrentUrl()).toContain('dashboard');
							dashboard_page.goToProfile();
							browser.waitForAngular();
							expect(browser.driver.getCurrentUrl()).toContain('profile');
							login_page.doLogout();
							//expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																							
	});		

	
	

});