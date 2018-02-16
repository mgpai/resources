 // Disable Auto reconnect for user specified period, if downloads fail to start/resume (no bytes downloaded) after an IP change.
 // Trigger Required: Interval
 // Set Interval to 60000 (60 Seconds)
 // Important: Enable "Synchronous execution of script" checkbox in top panel
 // Related Topic: https://board.jdownloader.org/showthread.php?t=76639

 var checkDuration = 5; // <- Period  (in minutes)  for which the downloaed bytes will be calculated after an IP change is detected
 var disableDuration = 60; // <- Set duration( in minutes) for which the auto reconnect should be disabled, if no bytes are downloaded after an IP change

 if (isDownloadControllerRunning()) {
     var oldIP = getProperty("oldIP", true);
     var newIP = getIP();

     if (newIP && !oldIP) {
         oldIP = newIP;
         setProperty("oldIP", newIP, true);
     }

     if (newIP && newIP != oldIP) {
         setProperty("oldIP", newIP, true);
         var startBytes = loadedBytes();
         sleep(checkDuration * 60 * 1000);
         var endBytes = loadedBytes();

         if (startBytes == endBytes) {
             setAutoReconnect(false);
             sleep(disableDuration * 60 * 1000);
             setAutoReconnect(true);
         }
     }
 }

 //Function
 function getIP() {
     try {
         return getPage("http://api.ipify.org");
     } catch (e) {
         return null
     }
 }

 function setAutoReconnect(boolean) {
     callAPI("config", "set", "jd.controlling.reconnect.ReconnectConfig", null, "AutoReconnectEnabled", boolean);
 }

 function loadedBytes() {
     return callAPI("polling", "poll", {
         "aggregatedNumbers": true
     })[0].eventData.data.loadedBytes;
 }
