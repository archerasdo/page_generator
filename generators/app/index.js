'use strict';

var base = require('./base.js')
module.exports = base.extend({
  //prompting: function () {
  //  var done = this.async();
  //  console.log('scaffoldFolders RUN')
  //  // Have Yeoman greet the user.
  //  this.log(yosay(
  //    'Welcome to the stellar ' + chalk.red('Page') + ' generator!'
  //  ));
  //  //this.appName = path.basename(process.cwd());
  //  this.license = 'ISC';
  //  this.description = '';
  //  this.author = '';
  //  var prompts = [
  //    {
  //      type: 'input',
  //      name: 'appName',
  //      message: 'name of app:', default: 'app'
  //    },
  //    {
  //    type: 'confirm',
  //    name: 'addDemoSection',
  //    message: 'Would you like to generate a demo section ?',
  //    default: true
  //  }];
  //
  //  this.prompt(prompts, function (props) {
  //    this.appName = props.appName;
  //    this.addDemoSection = props.addDemoSection;
  //    this.pkgName = props.name;
  //    this.license = props.license;
  //    this.author = props.author;
  //    this.description = props.description;
  //    done();
  //  }.bind(this));
  //},
  //constructor: function () {
  //  base.apply(this, arguments);
  //
  //  // This makes `appname` a required argument.
  //  this.argument('appname', { type: String, required: true });
  //  // And you can then access it later on this way; e.g. CamelCased
  //  this.appname = _.camelCase(this.appname);
  //},
  writing: {
    app: function () {
      console.log('writing start')
      this.copyAllFromTemplatePath();
      //var context = {
      //  site_name: this.appName
      //};
      //console.log(this.appName)
      //this.template('_package.json', this.appName + '/package.json');  //
      //this.template('_gulpfile.js', this.appName +'/gulpfile.js');
      //this.copy('global/footer/_footer.html', this.appName + '/tpl/footer.html');
      //this.template("global/header/_header.html",this.appName +  "/tpl/header.html", context);
      //this.copy("global/base.less",this.appName +  "/css/base.less");
    }
  },





  //generateDemoSection: function(){
  //  console.log('generateDemoSection RUN')
  //  if (this.addDemoSection) {
  //    var done = this.async();
  //    this.invoke("page:section", {args: this.appName}, function () {
  //      done();
  //    });
  //  } else {
  //    this.write("app/menu.html","");
  //  }
  //},
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
