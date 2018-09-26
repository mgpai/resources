// Filename to lower case
// Trigger: Packagizer Hook
// Related topic: https://board.jdownloader.org/showthread.php?t=78738

var fn = link.getName();

if (fn) {
    var lo = fn.toLowerCase();
    if (fn != lo) link.setName(lo);
}
