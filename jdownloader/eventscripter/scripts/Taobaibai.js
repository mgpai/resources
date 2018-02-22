// Schedule Extraction
// Trigger Required: Interval
// In "Archive Extractor" settings, disable the "Extract archives after download (default value)" checkbox
// Related Post: https://board.jdownloader.org/showpost.php?p=418683&postcount=341

var t = [18, 00]; // <- Specify time (24HRS format) to start the extraction
var run = new Date().setHours(t[0], t[1], 0, 0) % new Date() < interval;

if (run) getAllDownloadLinks().forEach(function(link) {
    if (!link.getArchive()) return;
    if (!link.isFinished()) return;
    if (link.getExtractionStatus() != null) return;
    if (link.getArchive().getInfo().autoExtract == false) return;
    callAPI("extraction", "startExtractionNow", [link.getUUID()], []);
});
