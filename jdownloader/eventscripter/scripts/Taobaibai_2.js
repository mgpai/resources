// Extract archives after all packages have finished
// Trigger Required: Package Finished
// In "Archive Extractor" settings, disable the "Extract archives after download (default value)" checkbox
// Related Post: https://board.jdownloader.org/showpost.php?p=418712&postcount=345

if (allPackagesFinished()) startExtraction();

// Functions
function allPackagesFinished() {
    return getAllFilePackages().every(function(package) {
        return package.isFinished();
    });
}

function startExtraction() {
    getAllDownloadLinks().forEach(function(link) {
        if (!link.getArchive()) return;
        if (!link.isFinished()) return;
        if (link.getExtractionStatus() != null) return;
        if (link.getArchive().getInfo().autoExtract == false) return;
        callAPI("extraction", "startExtractionNow", [link.getUUID()], []);
    });
}
