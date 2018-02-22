// Extract archives after all download have completed
// Trigger Required: Package Finished
// Related Post: https://board.jdownloader.org/showpost.php?p=418712&postcount=345

if (allFinished()) getAllDownloadLinks().forEach(function(link) {
    if (!link.getArchive()) return;
    if (!link.isFinished()) return;
    if (link.getExtractionStatus() != null) return;
    if (link.getArchive().getInfo().autoExtract == false) return;
    callAPI("extraction", "startExtractionNow", [link.getUUID()], []);
});

// Function
function allFinished() {
    return getAllDownloadLinks().every(function(link) {
        return link.getStatus() != null;
    });
}
