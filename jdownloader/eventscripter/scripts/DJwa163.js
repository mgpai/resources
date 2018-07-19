// Replace characters in file name
// Trigger: Packagizer Hook
// Forum Topic: https://board.jdownloader.org/showthread.php?t=77989

var fn = link.getName();
var re = /[+_-]/g;

if (re.test(fn)) link.setName(fn.replace(re, " ").replace(/\s+/g, " "));
