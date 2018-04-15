 // Reconnect if all downloads have been running for at least one minute, and the average (global) download speed is below user specified speed
 // Target Required: "Interval" (Set interval to 30000 or more)
 // Important: Enable "Synchronous Execution" checkbox in top panel
 // Forum Post: https://board.jdownloader.org/showpost.php?p=422375&postcount=416

 var minSpeed = 400; // <- Set minimum speed in KiB/s

 (function() {
     if (interval < 30000) return;
     if (!isSynchronous) return;
     var links = getRunningDownloadLinks();
     if (!links.length) return;
     if (getAverageSpeed() > minSpeed * 1024) return;
     if (links.some(function(link) {
             return link.getDownloadDuration() < 60000;
         })) return;
     doReconnect();
 })();
