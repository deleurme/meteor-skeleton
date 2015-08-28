//     __         __                    
//    / /_  ___  / /___  ___  __________
//   / __ \/ _ \/ / __ \/ _ \/ ___/ ___/
//  / / / /  __/ / /_/ /  __/ /  (__  ) 
// /_/ /_/\___/_/ .___/\___/_/  /____/  
//             /_/                      

// Register some template helpers that seemed, well, helpful.
_.each({
  reactive: function(prop) {
    return Template.instance()[prop].get();
  },
  session: function(prop) {
    return Session.get(prop);
  },
  meteor: function(f, a) {
    // bind f to meteor 
    return "";
  },
  error: function() {
    return Session.get('error');
  },
  toLowerCase: function(text) {
    return text && text.toLowerCase();
  },
  toUpperCase: function(text) {
    return text && text.toUpperCase();
  },
  firstChar: function(text) {
    return text && text[0].toUpperCase();
  },
  sessionBool: function(prop) {
    return Session.get(prop) ? 'true' : 'false';
  },
  hideUnlessLong: function(prop) {
    if (Template.instance()[prop].get().length <= 1){
      return 'hidden';
    }
    else return '';
  },
  hideIf: function(prop) {
    if (Template.instance()[prop].get()){
      return 'hidden';
    }
    else return '';
  },
  hideUnless: function(prop) {
    if (!Template.instance()[prop].get()){
      return 'hidden';
    }
    else return '';
  },
  ifr: function(prop, a, then) {
    if (Template.instance()[prop].get()==a) { return then; }
  },
  ifs: function(prop, a, then) {
    if (Session.get(prop)==a) { return then; }
  },
  localeDate: function(date) {
    return date.toLocaleDateString();
  },
  isThen: function(a, then) {
    return a ? then : '';
  },
  isNotThen: function(a, then) {
    return a ? '' : then;
  },
  isTrue: function(a, b, consl) {
    // Template tag # if isTrue a b consl 
    if (_.isBoolean(consl)) console.log(a, b, a==b);
    return a == b;
  },
  isTrueThen: function(a, b, then) {
    return a == b ? then : false;
  },
  isUserThen: function(a, b) {
    return this.userId == Meteor.userId() ? a : b;
  },
  isMobile: function(a) {
    return Meteor.isCordova() ? a : false;
  },
  isMobileThen: function(a, b) {
    return Meteor.isCordova() ? a : b;
  },
  toDateString: function(d) {
    return d.toDateString();
  },
  currentYear: function() {
    return (new Date).getFullYear();
  },
  disableIfEmpty: function(input) {
    return "";
  },
}, function(fn, name) { Blaze.registerHelper(name, fn); });

