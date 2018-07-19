// Replace characters in file name
// Trigger: Packagizer Hook

var fn = link.getName();
var re = /[+_-]/g;

if (re.test(fn)) link.setName(fn.replace(re, " ").replace(/\s+/g, " "));
