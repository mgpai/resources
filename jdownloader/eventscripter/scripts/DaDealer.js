// Update when Idle
// Trigger Required: "Interval"
// Set interval to 60000 (60 seconds) or more
// Related Post: https://board.jdownloader.org/showpost.php?p=417592&postcount=294

if (readyForUpdate()) callAPI("update", "restartAndUpdate");

// Functions
function readyForUpdate() {
    if (interval < 60000) return;
    if (!callAPI("update", "isUpdateAvailable")) return;
    if (callAPI("linkcrawler", "isCrawling")) return;
    if (callAPI("linkgrabberv2", "isCollecting")) return;
    if (callAPI("extraction", "getQueue").length > 0) return;
    return true;
}
