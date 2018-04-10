// Flatten Archives (Move extracted files from sub-folders to the main extraction folder)
// Trigger Required: "Archive Extraction Finished"
// Important: Enable "Sychronous Execution" checkbox in the top panel
// Forum Topic: https://board.jdownloader.org/showthread.php?t=77296

(function() {
    if (!isSynchronous()) return;
    var extractionFolder = archive.getExtractToFolder();
    archive.getExtractedFilePaths().forEach(function(path, index) {
        if (path.getParent() == extractionFolder) return;
        var fileName = path.getName();
        var exists = getPath(extractionFolder + "/" + fileName).exists();
        if (exists) {
            path.renameTo(extractionFolder + "/[" + index + "] " + fileName);
        } else {
            path.moveTo(extractionFolder);
        }
        if (!path.getParent().length) path.getParent().delete();
    });
})();
