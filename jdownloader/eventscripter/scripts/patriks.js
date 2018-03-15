// Move all links to download list
// Related Post: https://board.jdownloader.org/showpost.php?p=419538&postcount=364

moveAllToDownloadList();

// Function
function moveAllToDownloadList() {
    var packages = getAllCrawledPackages();
    if (!packages.length) return;
    callAPI("linkgrabberv2", "cleanup", [], [], "DELETE_DUPE", "REMOVE_LINKS_ONLY", "ALL");
    packages.forEach(function(package) {
        callAPI("linkgrabberv2", "moveToDownloadlist", [], [package.getUUID()]);
    });
}
