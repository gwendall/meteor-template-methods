Package.describe({
  name: "gwendall:template-methods",
  summary: "Useful methods for templates",
  git: "https://github.com/gwendall/meteor-template-methods.git",
  version: "0.1.0"
});

Package.onUse(function (api, where) {

  api.use([
    "templating@1.0.11",
    "underscore@1.0.2"
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

});
