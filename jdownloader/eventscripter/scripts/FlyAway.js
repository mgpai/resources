 // Reconnect if all downloads have been running for at least one minute, and the average (global) download speed is below user specified speed
 // Target Required: "Interval" (Set interval to 30000 or more)
 // Forum Post: https://board.jdownloader.org/showpost.php?p=422375&postcount=416

 var minSpeed = 400; // <- Set minium speed in KiB/s

 (function() {
     if (interval < 30000) return;
     if (!isDownloadControllerRunning()) return;
     if (getAverageSpeed() > minSpeed * 1024) return;
     if (getRunningDownloadLinks().some(function(link) {
             return link.getDownloadDuration() < 60000;
         })) return;
     requestReconnect();
 })();
