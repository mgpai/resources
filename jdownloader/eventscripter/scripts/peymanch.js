// Skip links from specified host when daily limit is reached
// Trigger required: Interval (Minimum:60000ms, Recommended:300000ms or more)
// Forum Topic: https://board.jdownloader.org/showpost.php?p=423214&postcount=448

var dailyLimit = 29.50; // <- Set daily limit in GiB
var myHost = "hostname.com"; // <- Set JD plugin (host) name

(function() {
    if (interval < 60000) return;
    if (!getRunningDownloadLinks().length) return;

    var bytesLoaded = 0;

    getAllDownloadLinks().forEach(function(link) {
        if (link.getHost() != myHost) return;
        var finishedToday = new Date(link.getFinishedDate()).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0);
        var partiallyLoaded = !link.isFinished() && link.getBytesLoaded() > 0;
        if (finishedToday || partiallyLoaded) bytesLoaded += link.getBytesLoaded();
    });

    if (bytesLoaded / (1024 * 1024 * 1024) >= dailyLimit) skipHost();

    function skipHost() {
        getAllDownloadLinks().forEach(function(link) {
            if (!link.isFinished() && link.getHost() == myHost && !link.isSkipped()) link.setSkipped(true);
        });
    }
})();
