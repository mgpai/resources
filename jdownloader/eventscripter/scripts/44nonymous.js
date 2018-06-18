// Run external program when all packages finished
// Trigger: Download Controller Stopped
// Forum Post: https://board.jdownloader.org/showpost.php?p=425864&postcount=473

var allPackagesFinished = getAllFilePackages().every(function(package) {
    return package.isFinished();
});

if (allPackagesFinished) callAsync(null, "C:/Programs/P2P/uTorrent/utorrent.exe");
