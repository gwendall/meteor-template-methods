// Oddly the number of parentViews in which the parent template instance is varies from input to input
Template.parentInstance = function(tpl) {
  var parent = Meteor._get(tpl, "view", "parentView");
  for (var i = 0; i < 100; i++) {
    if (!parent) break;
    if (parent.templateInstance) break;
    parent = parent.parentView;
  }
  var instance = parent && parent.templateInstance && parent.templateInstance();
  return instance;
}

Template.inheritHelpers = function(tpl) {
  tpl.view.template.__helpers = _.extend(Template._templateHelpers(tpl), Template._parentHelpers(tpl));
}

Template._templateHelpers = function(tpl) {
  return Meteor._get(tpl, "view", "template", "__helpers") || {};
}

Template._parentHelpers = function(tpl) {
  var parent = Template.parentInstance(tpl);
  return Template._templateHelpers(parent);
}
