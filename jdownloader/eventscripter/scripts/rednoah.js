// Run filebot on package finished (custom event)
// Trigger: Remote API Event fired
// Forum Topic: https://board.jdownloader.org/showthread.php?t=68480

if (packageFinished()) {
    var script = JD_HOME + '/jdownloader-postprocess.sh';
    var path = package.getDownloadFolder();
    var name = package.getName();
    var label = package.getComment() || 'N/A';
    var command = [script, path, name, label];

    log(command);
    log(callSync(command));
}

//Function
function packageFinished() {
    if (event.publisher != "downloads") return;
    var id = event.id;
    if (id != "LINK_UPDATE.status" && id != "LINK_UPDATE.extractionStatus") return;
    var data = JSON.parse(event.data);
    if (data.status != "FINISHED" && data.extractionStatus != "SUCCESSFUL") return;
    var link = getDownloadLinkByUUID(data.uuid);
    if (!link) return;
    package = link.getPackage();
    if (!package.isFinished()) return;
    var extractionPending = package.getDownloadLinks().some(function(link) {
        return link.getArchive() && link.getExtractionStatus() != "SUCCESSFUL";
    });
    if (extractionPending) return;
    return true;
}
