// Disable download link, if file exists in download folder/subfolders
// Trigger required: A Download Started

var filesList = [];
getFiles(link.getPackage().getDownloadFolder());

var onDisk = filesList.some(function(path) {
    return link.isRunning() && getPath(path).getName() == link.getName();
});

if (onDisk) link.setEnabled(false);

// Function
function getFiles(folder) {
    getPath(folder).getChildren().forEach(function(path) {
        path.isFile() ? filesList.push(path) : filesList.concat(getFiles(path));
    });
}
