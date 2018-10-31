// Unskip links with unsolved captcha
// Trigger: Interval
// Set interval to 3600000 (60 minutes) or more
// Enable 'Synchronous Execution' checkbox in top panel
// Related Post: https: //board.jdownloader.org/showpost.php?p=432828&postcount=522

(function() {
    if (!isSynchronous()) return;
    if (interval < 60 * 60 * 1000) return;
    getAllDownloadLinks().forEach(function(link) {
        if (link.getSkippedReason() == "CAPTCHA") {
            link.setSkipped(false);
            if (!isDownloadControllerRunning()) startDownloads();
        }
    });
})();