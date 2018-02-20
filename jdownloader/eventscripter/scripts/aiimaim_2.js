// Limit number of reconnects allowed during user defined duration
// Trigger Required: "After a reconnect"
// IMPORTATNT: Enable "Synchronous execution of script" checkbox in the top panel
// Related Topic: https://board.jdownloader.org/showthread.php?t=76639

var maxReconnects = 3; // <- Maximum alllowed reconnects
var duration = 10; // <- Duration (in minutes) to check if the number of reconnects have exceed the max allowed reonnects
var disableDuration = 60; // <- Duration  (in minutes) for which auto-reconnect will be disabled if reconnects exceed the specified limit

if (!getProperty("timeList", true)) setProperty("timeList", [], true);
var timeList = getProperty("timeList", true);

if (result == "SUCCESSFUL") timeList.push(new Date());
var totalReconnects = timeList.length;

if (totalReconnects >= maxReconnects) {
    var beginTime = timeList[totalReconnects - maxReconnects];
    var endTime = timeList[totalReconnects - 1]

    if (endTime - beginTime < duration * 60 * 1000) {
        setAutoReconnectEnabled(false);
        sleep(disableDuration * 60 * 1000);
        setAutoReconnectEnabled(true);
        timeList.push(new Date());
    }
}

// Function
function setAutoReconnectEnabled(boolean) {
    callAPI("config", "set", "jd.controlling.reconnect.ReconnectConfig", null, "AutoReconnectEnabled", boolean);
}
