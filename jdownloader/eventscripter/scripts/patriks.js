// Move all links to download list
// Related Post: https://board.jdownloader.org/showpost.php?p=419538&postcount=364

moveAllToDownloadList();

// Function
function moveAllToDownloadList() {
    getAllCrawledPackages().forEach(function(package) {
        callAPI("linkgrabberv2", "moveToDownloadlist", [], [package.getUUID()]);
    });
}
