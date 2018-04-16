// Disable download link, if file exists in download folder/subfolders
// Trigger required: A Download Started

var list;

var onDisk = getAllChildren(link.getPackage().getDownloadFolder()).some(function(path) {
    return link.isRunning() && getPath(path).getName() == link.getName();
});

if (onDisk) link.setEnabled(false);

// Function
function getAllChildren(path) {
    list = list || [];
    getPath(path).getChildren().forEach(function(path) {
        path.isFile() ? list.push(path) : list.concat(getAllChildren(path));
    });
    return list
}
