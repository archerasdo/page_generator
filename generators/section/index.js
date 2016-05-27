'use strict';
const util = require('util');
const yeoman = require('yeoman-generator');
const _ = require("lodash");

module.exports = yeoman.generators.Base.extend({


  initializing: function () {
    this.argument('appName', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Page subgenerator with the argument ' + this.appName + '.');
  },

  generateSection: function(){
    console.log('this:'+ this.appName);
    var context = {
      content: this.appName,
      id: _.classify(this.appName)
    }

    var fileBase = Date.now()  + "_" + _.underscored(this.appName);
    var htmlFile = this.appName + "/sections/" + fileBase + ".html";
    var cssFile  = this.appName + "/css/" + fileBase + ".less";

    this.template("_section.html", htmlFile, context);
    this.template("_section.less", cssFile, context);
  },

  generateMenu: function(){
    var menu = this.read("_menu.html");

    var t = '<%= name %>';
    var files = this.expand("app/sections/*.html");
    console.log(_)
    for (var i = 0; i < files.length; i++) {
      var name = _(files[i]).strRight("_").strLeftBack(".html").humanize().value();

      var context = {
        name: name,
        id: _.classify(name)
      };

      var link = this.engine(t, context);
      menu = this.append(menu, "div.menu", link);
    }

    this.write(this.appName + "/menu.html", menu);
  }




  //writing: function () {
  //  this.fs.copy(
  //    this.templatePath('somefile.js'),
  //    this.destinationPath('somefile.js')
  //  );
  //}
});
