module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['mocha', 'chai'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-chai',
        'karma-phantomjs-launcher',
        'karma-mocha-reporter'
            ],

    reporters: [
        'mocha'
    ],

    client: {
      mocha: {
        ui: 'bdd'
      }
    }

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};