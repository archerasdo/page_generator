/**
 * Created by archersado on 16/5/27.
 */
'use strict';
const util = require('util');
const path = require('path');
const generators = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require("lodash");
const walk = require('walk');

module.exports = generators.Base.extend({

  traverseFiles: function (base,action) {
    const options = {
      followLinks: false,
      listeners: {
        file: function (root, fileStats, next) {
          let relative = fp.join(root.replace(base, ''), fileStats.name);
          if (relative.startsWith('/')) {
            relative = relative.slice(1)
          }

          action(relative, fileStats)
          next()
        }
      }
    }
    walk.walkSync(base, options)
  },

  copyAllFromTemplatePath: function (predicate) {
    predicate = predicate || _.constant(true)
    console.log('copyAllFromTemplatePath start')
    this.traverseFiles(this.templatePath(), function (file, stat) {
      if (predicate(file, stat)) {
        const fromPath = fp.join(this.templatePath(), file);
        const toPath = fp.join(this.destinationPath(), file);
        this.fs.copy(fromPath, toPath)
      }
    }.bind(this))
  }
});
