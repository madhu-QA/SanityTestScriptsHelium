# SanityTestScriptsHelium
Run Protractor Tests using Grunt for running e2e  and for Continuous Integration
In the Project Grunt.js add the following:-

1.grunt.loadNpmTasks('grunt-protractor-runner');



2.grunt.registerTask('e2e', ['karma', 'mocha',  'protractor_webdriver','protractor', 'watch' ]);



3.grunt.initConfig({
    protractor_webdriver: {
        your_target: {
            options: {
                path: 'node_modules/protractor/bin/',
                command: 'webdriver-manager start'
            }
        }
    }, 
    
    
4.protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },
