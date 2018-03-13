// Move all links to download list

moveAllToDownloadList();

function moveAllToDownloadList() {
    getAllCrawledPackages().forEach(function(package) {
        callAPI("linkgrabberv2", "moveToDownloadlist", [], [package.getUUID()]);
    });
}
