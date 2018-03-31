// Pause downloads during extraction
// Trigger Required: Any Extraction Event
// Enable "Synchrounous Execution" checkbox in the top panel
// Related Post: https://board.jdownloader.org/showpost.php?p=421379&postcount=398

(function() {
    if (!isDownloadControllerRunning()) return;
    if (!callAPI("extraction", "getQueue").length) return;
    if (!isDownloadControllerPaused()) setDownloadsPaused(true);
    while (callAPI("extraction", "getQueue").length) sleep(1000);
    if (isDownloadControllerPaused()) setDownloadsPaused(false);
})();
