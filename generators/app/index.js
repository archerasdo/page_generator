'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require("underscore.string");

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stellar ' + chalk.red('Page') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name ?'
    },{
      type: 'confirm',
      name: 'addDemoSection',
      message: 'Would you like to generate a demo section ?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.addDemoSection = props.addDemoSection;

      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    this.mkdir("app");
    this.mkdir("app/css");
    this.mkdir("app/sections");
    this.mkdir("build");
  },


  copyMainFiles: function(){
    this.copy("global/footer/_footer.html", "app/footer.html");
    this.copy("_gruntfile.js", "Gruntfile.js");
    this.copy("_gulpfile.js", "gulpfile.js");
    this.copy("_package.json", "package.json");
    this.copy("global/base.less", "app/css/base.less");

    var context = {
      site_name: this.appName
    };

    this.template("global/header/_header.html", "app/header.html", context);
  },


  generateDemoSection: function(){
    if (this.addDemoSection) {
      var done = this.async();
      this.invoke("page:section", {args: ["Demo Section"]}, function () {
        done();
      });
    } else {
      this.write("app/menu.html","");
    }
  },
  //generateMenu: function(){
  //  var menu = this.read("_menu.html");
  //
  //  var t = '<%= name %>';
  //  var files = this.expand("app/sections/*.html");
  //
  //  for (var i = 0; i < files.length; i++) {
  //    var name = _.chain(files[i]).strRight("_").strLeftBack(".html").humanize().value();
  //
  //    var context = {
  //      name: name,
  //      id: _.classify(name)
  //    };
  //
  //    var link = this.engine(t, context);
  //    menu = this.append(menu, "div.menu", link);
  //  }
  //
  //  this.write("app/menu.html", menu);
  //},
  //writing: {
  //  app: function () {
  //    this.fs.copy(
  //      this.templatePath('_package.json'),
  //      this.destinationPath('package.json')
  //    );
  //    this.fs.copy(
  //      this.templatePath('_bower.json'),
  //      this.destinationPath('bower.json')
  //    );
  //  },
  //
  //
  //  projectfiles: function () {
  //    this.fs.copy(
  //      this.templatePath('editorconfig'),
  //      this.destinationPath('.editorconfig')
  //    );
  //    this.fs.copy(
  //      this.templatePath('jshintrc'),
  //      this.destinationPath('.jshintrc')
  //    );
  //  }
  //},

  install: function () {
    this.installDependencies();
  }
});
