// Stop and restart all downloads if average speed is below target speed
// Target Required: "Interval"
// Set interval to 30000 (30 seconds) or more
// Related Topic: https://board.jdownloader.org/showpost.php?p=417730&postcount=299

var targetSpeed = 1024; // <- Set target speed in KiB/s
var minDuration = 30; // <- Set the minimum duraton (in seconds) a download must be running in order to consider it as started

var links = interval >= 30000 ? getRunningDownloadLinks() : [];
var slowSpeed = links.length ? getAverageSpeed() < targetSpeed * 1024 : false;

if (slowSpeed && allStarted()) {
    stopDownloads();
    while (!isDownloadControllerIdle()) sleep(1000);
    startDownloads();
}

//Functions
function allStarted() {
    return links.every(function(link) {
        return link.getDownloadDuration() > minDuration * 1000;
    });
}
