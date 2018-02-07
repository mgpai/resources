// Pause ond resume downloads if average speed is below target speed
// Trigger required: "Interval"
// Set Interval to 60000 (60 seconds) or more
// Related Post: https://board.jdownloader.org/showpost.php?p=417341&postcount=281

var targetSpeed = 1024; // <- Set target speed in KiB/s
var delay = 5; // <- Set delay (in seconds) between pause and resume

if (interval >= 60000 && getRunningDownloadLinks().length && getAverageSpeed() < targetSpeed * 1024) {
    setDownloadsPaused(true);
    sleep(delay * 1000);
    setDownloadsPaused(false);
}
