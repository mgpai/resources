// Detect duplicate files
// Trigger Required: "Toolbar Button Pressed"
// Customize "Main Toolbar", add "EventScripter Trigger" button  and rename it to "Detect Duplicate" (without quotes/case-sensitve)
// The script will work in linkgrabber list only when the downloader folder is set by the user, either manually or via packagizer.
// Related Post: https://board.jdownloader.org/showpost.php?p=418373&postcount=326

if (name == "Detect Duplicate") {
    var comment = "Exists on Disk" // <- Set text which will be used as comment in duplicate files
    getAllFilePackages().concat(getAllCrawledPackages()).forEach(function(package) {
        var folder = package.getDownloadFolder();
        var files = [];

        if (folder) {
            getPath(folder).getChildren().forEach(function(file) {
                files.push(file.getName());
            });
            if (files.length) {
                package.getDownloadLinks().forEach(function(link) {
                    var duplicate = files.indexOf(link.getName()) > -1;
                    if (duplicate) link.setComment(comment);
                });
            }
        }
    });
}
