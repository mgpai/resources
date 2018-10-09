// Set last download destination as download folder for new links
// Trigger: Packagizer Hook
// Enable Synchronous execution checkbox in the top Panel
// Forum Topic: https://board.jdownloader.org/showthread.php?t=78891

if (isSynchronous()) link.setDownloadFolder(getLastDownloadDestination());

// Function
function getLastDownloadDestination() {
    return callAPI("config", "get", "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings", null, "DownloadDestinationHistory")[0].name;
}
