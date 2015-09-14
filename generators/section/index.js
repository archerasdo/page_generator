'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require("underscore.string");

module.exports = yeoman.generators.Base.extend({


  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Page subgenerator with the argument ' + this.name + '.');
  },

  generateSection: function(){
    console.log('this:'+ this.name);
    var context = {
      content: this.name,
      id: _.classify(this.name)
    }

    var fileBase = Date.now()  + "_" + _.underscored(this.name);
    var htmlFile = "app/sections/" + fileBase + ".html";
    var cssFile  = "app/css/" + fileBase + ".less";

    this.template("_section.html", htmlFile, context);
    this.template("_section.less", cssFile, context);
  },

  generateMenu: function(){
    var menu = this.read("_menu.html");

    var t = '<%= name %>';
    var files = this.expand("app/sections/*.html");

    for (var i = 0; i < files.length; i++) {
      var name = _.chain(files[i]).strRight("_").strLeftBack(".html").humanize().value();

      var context = {
        name: name,
        id: _.classify(name)
      };

      var link = this.engine(t, context);
      menu = this.append(menu, "div.menu", link);
    }

    this.write("app/menu.html", menu);
  }




  //writing: function () {
  //  this.fs.copy(
  //    this.templatePath('somefile.js'),
  //    this.destinationPath('somefile.js')
  //  );
  //}
});
