/// <reference path="../typings/browser.d.ts" />
var testsContext = require.context(".", true, /\.phspec$/);
testsContext.keys().forEach(testsContext);