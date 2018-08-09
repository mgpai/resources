// Replace file name with archive name
// Trigger: Archive extraction finished
// Forum Post: https://board.jdownloader.org/showpost.php?p=428880&postcount=508

var myExtensions = ["avi", "mkv", "mp4", "mpeg"];

archive.getExtractedFilePaths().forEach(function(file) {
    if (myExtensions.indexOf(file.getExtension()) == -1) return;
    var path = splitPath(file);
    file.renameTo(path[1] + archive.getName() + path[3]);
});

//Functions
function splitPath(path) {
    return path.toString().match(/(.+\\)(.+)(\..+)/);
}
